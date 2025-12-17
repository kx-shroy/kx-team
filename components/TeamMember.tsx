interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const TeamMember = ({ name, role, image, onMouseEnter, onMouseLeave }: TeamMemberProps) => {
  return (
    <div
      className="team-member-item relative flex items-center justify-between px-3 py-5 border-t-2 border-black overflow-hidden cursor-pointer group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="text-5xl uppercase relative z-10 transition-colors duration-500 group-hover:text-white">
        {name}
      </div>
      <div className="text-2xl relative z-10 transition-colors duration-500 group-hover:text-white">
        {role}
      </div>
    </div>
  );
};

export default TeamMember;