interface SkillTagProps {
  children: React.ReactNode;
}

export default function SkillTag({ children }: SkillTagProps) {
  return (
    <div className="rounded-full px-3 py-1.5 text-xs font-medium text-primary bg-[rgb(var(--primary)/0.1)]">
      {children}
    </div>
  );
}