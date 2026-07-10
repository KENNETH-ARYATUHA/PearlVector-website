import { TEAM } from "../data/content";
import PhotoFrame from "./PhotoFrame";

import teamKenneth from "../assets/images/team-kenneth.jpg";
import teamMartin from "../assets/images/team-martin.jpg";
import teamArnold from "../assets/images/team-arnold.jpg";
import teamRabecca from "../assets/images/team-rabecca.jpg";
import teamGeoffrey from "../assets/images/team-geoffrey.jpg";

const TEAM_PHOTOS = {
  "Aryatuha Kenneth": teamKenneth,
  "Openy Martin": teamMartin,
  "Kulabako Arnold Odongo": teamArnold,
  "Nanshemeza Rabecca": teamRabecca,
  "Ayen Geoffrey Alexander": teamGeoffrey,
};

function TeamCard({ member }) {
  return (
    <div className="w-full text-center sm:w-64">
      <PhotoFrame
        src={TEAM_PHOTOS[member.name]}
        alt={member.name}
        caption={`${member.name} — ${member.role}`}
        className="aspect-square w-full"
      />
      <h3 className="mt-4 font-display text-base font-semibold text-navy">
        {member.name}
      </h3>
      <p className="text-sm font-medium text-emerald">{member.role}</p>
      <p className="mt-1 text-xs leading-relaxed text-ink/60">
        {member.title}
      </p>
    </div>
  );
}

export default function Team() {
  // First 4 members go in the main grid; anything beyond that (e.g. a 5th
  // member) is centered on its own row underneath.
  const mainTeam = TEAM.slice(0, 4);
  const extraTeam = TEAM.slice(4);

  return (
    <section id="team" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald">
            Meet the Team
          </p>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            The people behind PearlVector
          </h2>
          <p className="mt-4 text-ink/70">
            A small, hands-on founding team covering full-stack development,
            AI/ML, cybersecurity and systems administration.
          </p>
        </div>

        {/* Main row of 4 */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {mainTeam.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {/* Extra member(s) centered on their own row below */}
        {extraTeam.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {extraTeam.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}