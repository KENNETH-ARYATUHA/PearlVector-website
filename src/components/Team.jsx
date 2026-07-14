import { useEffect, useState } from "react";
import PhotoFrame from "./PhotoFrame";

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/team`)
      .then((res) => res.json())
      .then(setTeam);
  }, []);

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
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.id} className="text-center">
              <PhotoFrame
                 src={member.photo_url}
                     alt={member.name}
                   shape="africa"
                 className="aspect-[542/494] w-full max-w-[300px] mx-auto"
               />
              <h3 className="mt-4 font-display text-base font-semibold text-navy">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-emerald">{member.role}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink/60">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}