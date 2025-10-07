import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        decimals={2}
        start={amount - 10}
        duration={0.75}
        end={amount}
        prefix="₦"
      />
    </div>
  );
};

export default AnimatedCounter;
