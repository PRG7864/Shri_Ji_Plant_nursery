import React from 'react';
import { Sun, Droplets, Thermometer, ShieldCheck, Ruler, Sparkles, Layers } from 'lucide-react';

const CareSpecsCard = ({ care = {} }) => {
  const specs = [
    {
      icon: Sun,
      label: 'Light',
      value: care.light || 'Bright Indirect Light',
      color: '#A47752'
    },
    {
      icon: Droplets,
      label: 'Water',
      value: care.water || 'Every 7-10 days',
      color: '#1F513A'
    },
    {
      icon: Thermometer,
      label: 'Temperature',
      value: care.temperature || '18°C – 30°C',
      color: '#C86D51'
    },
    {
      icon: ShieldCheck,
      label: 'Pet Friendly',
      value: care.petFriendly ? '100% Non-Toxic (ASPCA Safe)' : 'Keep away from pets',
      color: care.petFriendly ? '#1F513A' : '#C86D51'
    },
    {
      icon: Ruler,
      label: 'Mature Height',
      value: care.height || '30 – 60 cm',
      color: '#657A55'
    },
    {
      icon: Sparkles,
      label: 'Care Difficulty',
      value: care.difficulty || 'Easy Care',
      color: '#12372A'
    }
  ];

  return (
    <div className="bg-[#FAF8F2] rounded-3xl p-6 border border-[#12372A]/8">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-4 h-4 text-[#1F513A]" />
        <h4 className="font-serif font-bold text-sm text-[#12372A] uppercase tracking-wider">
          Botanical Care Metadata
        </h4>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {specs.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.label}
              className="p-3.5 rounded-2xl bg-[#FCFBF7] border border-[#12372A]/5 space-y-1 shadow-sm"
            >
              <div className="flex items-center gap-1.5 text-xs text-[#657A55] font-semibold">
                <IconComp className="w-3.5 h-3.5 shrink-0" style={{ color: item.color }} />
                <span>{item.label}</span>
              </div>
              <div className="text-xs font-bold text-[#18201B] line-clamp-2">
                {item.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareSpecsCard;
