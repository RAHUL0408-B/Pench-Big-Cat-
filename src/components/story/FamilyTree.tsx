"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FAMILY_MEMBERS_DATA } from "@/content/family-story";
import { FamilyMember } from "@/types/resort";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function FamilyTree() {
  const [selectedMember, setSelectedMember] = useState<FamilyMember>(
    FAMILY_MEMBERS_DATA.find((m) => m.id === "jugni") || FAMILY_MEMBERS_DATA[0]
  );

  return (
    <div className="w-full space-y-12">
      {/* Visual Lineage Flow: Generation Hierarchy */}
      <div className="bg-forest-night text-stone-cream p-6 sm:p-8 md:p-10 border border-forest-canopy/40 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-forest-canopy/30 gap-4">
          <div>
            <span className="font-mono text-xs text-brass tracking-luxury uppercase">
              Lineage Chronology
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-stone-cream font-light mt-1">
              The Three Royal Generations of Pench
            </h3>
          </div>
          <p className="text-xs font-mono text-stone-dawn/70 max-w-sm">
            Select any family member below to examine their territory, character, and corresponding resort sanctuary.
          </p>
        </div>

        {/* Responsive Generation Nodes */}
        <div className="space-y-8">
          {/* Generation 1: The Founders */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brass" />
              <h4 className="font-mono text-xs tracking-wide text-stone-dawn/60 uppercase">
                Generation I · The Founders of the Dynasty
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FAMILY_MEMBERS_DATA.filter((m) => m.generation === 1).map((member) => (
                <MemberButton
                  key={member.id}
                  member={member}
                  isSelected={selectedMember.id === member.id}
                  onSelect={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </div>

          {/* Connecting Line */}
          <div className="flex justify-center items-center py-1">
            <div className="h-6 w-[1px] bg-forest-canopy/60" />
          </div>

          {/* Generation 2: The Matriarch & Sovereign */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brass" />
              <h4 className="font-mono text-xs tracking-wide text-stone-dawn/60 uppercase">
                Generation II · The Matriarch & Sovereign
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FAMILY_MEMBERS_DATA.filter((m) => m.generation === 2).map((member) => (
                <MemberButton
                  key={member.id}
                  member={member}
                  isSelected={selectedMember.id === member.id}
                  onSelect={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </div>

          {/* Connecting Line */}
          <div className="flex justify-center items-center py-1">
            <div className="h-6 w-[1px] bg-forest-canopy/60" />
          </div>

          {/* Generation 3: Jugni & The Living Chapters */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brass" />
              <h4 className="font-mono text-xs tracking-wide text-stone-dawn/60 uppercase">
                Generation III · The Khawasa Rulers (Our Inspiration)
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {FAMILY_MEMBERS_DATA.filter((m) => m.generation === 3).map((member) => (
                <MemberButton
                  key={member.id}
                  member={member}
                  isSelected={selectedMember.id === member.id}
                  onSelect={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Selected Member Detail Showcase */}
      {selectedMember && (
        <div className="bg-stone-sand border border-forest-night/10 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
          {/* Photography Stage (5 cols) */}
          <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-square overflow-hidden bg-forest-night border border-forest-night/10">
            <Image
              src={selectedMember.image}
              alt={selectedMember.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="editorial-tag bg-forest-night text-stone-cream border-brass/40">
                Gen {selectedMember.generation}
              </span>
            </div>
          </div>

          {/* Story Narrative & Sanctuary Link (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="font-mono text-xs tracking-wide text-forest-canopy font-medium uppercase">
                {selectedMember.relation}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-forest-night font-light mt-1">
                {selectedMember.name}
              </h3>
            </div>

            <div className="space-y-2 text-xs font-mono text-forest-night/70 bg-stone-cream p-3.5 border border-forest-night/10">
              <p>
                <strong className="text-forest-night">Territory:</strong> {selectedMember.territory}
              </p>
              <p>
                <strong className="text-forest-night">Character:</strong> {selectedMember.character}
              </p>
            </div>

            <div className="space-y-3 text-sm text-forest-night/85 leading-relaxed font-sans">
              {selectedMember.story.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Resort Connection Box */}
            <div className="pt-2 border-t border-forest-night/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-forest-night/50 block">
                  Resort Sanctuary Tribute
                </span>
                <span className="font-serif text-lg text-forest-night font-medium">
                  {selectedMember.associatedVilla}
                </span>
              </div>
              <Link
                href="/stay"
                className="luxury-button-secondary text-[11px] py-2 px-4 self-start sm:self-auto"
              >
                <span>Explore Stays</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MemberButton({
  member,
  isSelected,
  onSelect,
}: {
  member: FamilyMember;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`text-left p-4 transition-all duration-300 border flex flex-col justify-between focus:outline-none focus:ring-1 focus:ring-brass ${
        isSelected
          ? "bg-forest-canopy border-brass text-stone-cream shadow-md"
          : "bg-forest-night/60 border-forest-canopy/30 text-stone-dawn hover:bg-forest-canopy/40 hover:border-forest-canopy/70"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <span className="font-serif text-lg font-medium tracking-wide">
          {member.name}
        </span>
        {isSelected && <CheckCircle2 className="w-4 h-4 text-brass" />}
      </div>
      <span className="text-[11px] font-mono text-stone-dawn/70 mt-1 line-clamp-1">
        {member.relation}
      </span>
    </button>
  );
}
