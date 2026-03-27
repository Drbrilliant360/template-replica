import { useEffect, useRef, useState } from "react";
import { ThumbsUp, Users, Award, ShoppingCart, Mail } from "lucide-react";

const stats = [
  { icon: ThumbsUp, value: 6200, label: "LIKES" },
  { icon: Users, value: 9700, label: "FOLLOWERS" },
  { icon: Award, value: 1200, label: "RECOMMENDATIONS" },
  { icon: ShoppingCart, value: 500, label: "SALES" },
  { icon: Mail, value: 1800, label: "MAIL" },
];

const useCountUp = (end: number, trigger: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    let startTime: number | null = null;
    requestAnimationFrame(step);
  }, [trigger, end]);
  return count;
};

const StatItem = ({ icon: Icon, value, label, visible }: { icon: typeof ThumbsUp; value: number; label: string; visible: boolean }) => {
  const count = useCountUp(value, visible);
  return (
    <div className="text-center">
      <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
      <div className="text-3xl font-heading font-bold !text-primary-foreground">{count}</div>
      <p className="text-xs tracking-wider !text-primary-foreground/70 mt-1">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-foreground py-16">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {stats.map((s, i) => (
          <StatItem key={i} {...s} visible={visible} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
