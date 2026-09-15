import Product from '../models/Product.js';

// @desc    Calculate plant recommendations based on quiz inputs
// @route   POST /api/quiz/recommend
export const getQuizRecommendations = async (req, res) => {
  try {
    const { space, sunlight, careLevel, goal } = req.body;
    const query = {};

    if (space && space !== 'Any') {
      query.spaces = { $in: [new RegExp(space, 'i')] };
    }

    if (goal === 'Pet-friendly') {
      query['care.petFriendly'] = true;
    } else if (goal === 'Air purification') {
      query.categorySlug = { $in: ['air-purifying', 'indoor-plants'] };
    } else if (goal === 'Flowers') {
      query.categorySlug = { $in: ['flowering-plants', 'outdoor-plants'] };
    }

    let recommended = await Product.find(query)
      .populate('category', 'name slug image')
      .limit(6);

    // Fallback if strict match yields too few
    if (recommended.length < 3) {
      recommended = await Product.find({ featured: true })
        .populate('category', 'name slug image')
        .limit(4);
    }

    res.json({
      recommendations: recommended,
      profile: {
        space,
        sunlight,
        careLevel,
        goal,
        tagline: `Curated botanicals tailored for your ${space || 'living space'} with ${sunlight || 'natural'} light.`
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
