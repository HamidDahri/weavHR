export interface StepContent {
  title: string;
}

interface StepperProps {
  steps: StepContent[];
  activeStep?: number;
  className?: string;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep = 0,
  className = "",
}) => {
  if (!steps?.length) {
    console.warn("Stepper: No steps provided");
    return null;
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        className={`flex items-center justify-center gap-2 w-full p-4 ${className}`}
      >
        {steps.map((_, index) => (
          <div key={index} className="flex-1">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                index <= activeStep ? "bg-primary" : "bg-gray-100"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          {steps[activeStep]?.title}
        </h2>
      </div>
    </div>
  );
};

export default Stepper;
