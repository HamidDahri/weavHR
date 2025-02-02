// import { useState } from "react";

// const steps = [
//   { id: 1, title: "Choose Your Workforce Model" },
//   { id: 2, title: "Location & Staff Structure" },
//   { id: 3, title: "Check-In & Check-Out Settings" },
//   { id: 4, title: "Job Posting & Client Job Requests" },
//   { id: 5, title: "Batch Notification Settings" },
//   { id: 6, title: "Notifications & Reminders" },
//   { id: 7, title: "Review & Confirm" },
// ];

// const Step1Content = () => (
//   <div className="p-4 border rounded-md">
//     <h2 className="mb-4 text-xl font-semibold">Choose Your Workforce Model</h2>
//     <p className="mb-4">
//       Which best describes your organization’s operations?
//       <br />
//       (Choose one option to configure your platform settings.)
//     </p>
//     <div className="flex flex-col gap-3">
//       <label className="flex items-center gap-2 p-3 border rounded-md cursor-pointer">
//         <input
//           type="radio"
//           name="workforceModel"
//           value="Direct Workforce Management"
//         />
//         <div>
//           <strong>Direct Workforce Management</strong>
//           <p className="text-sm text-gray-500">
//             For organizations managing their own workforce, including internal
//             employees and optionally external/contract staff, but without
//             external client job requests.
//           </p>
//         </div>
//       </label>
//       <label className="flex items-center gap-2 p-3 border rounded-md cursor-pointer">
//         <input
//           type="radio"
//           name="workforceModel"
//           value="Client & Casual Workforce"
//         />
//         <div>
//           <strong>Client & Casual Workforce</strong>
//           <p className="text-sm text-gray-500">
//             For agencies managing external clients and casual/contracted staff,
//             where clients request jobs and staff apply for assignments.
//           </p>
//         </div>
//       </label>
//     </div>
//     <button className="px-4 py-2 mt-4 text-white bg-purple-600 rounded-md">
//       Save & Close
//     </button>
//   </div>
// );

// export default function MultiStepForm() {
//   const [currentStep, setCurrentStep] = useState(1);

//   const renderStepContent = () => {
//     switch (currentStep) {
//       case 1:
//         return <Step1Content />;
//       // Add cases for other steps here with their respective components
//       default:
//         return <div>Step content goes here.</div>;
//     }
//   };

//   return (
//     <div className="max-w-4xl p-6 mx-auto">
//       <h1 className="mb-4 text-2xl font-bold">
//         Welcome to Weavik - Organization Workflow Setup
//       </h1>
//       <p className="mb-8 text-gray-600">
//         Configure your organization’s settings
//       </p>

//       <div className="flex flex-col gap-4">
//         {steps.map((step) => (
//           <button
//             key={step.id}
//             className={`text-left px-4 py-2 border rounded-md flex justify-between items-center ${
//               currentStep === step.id ? "bg-purple-50 border-purple-500" : ""
//             }`}
//             onClick={() => setCurrentStep(step.id)}
//           >
//             <span>
//               Step {step.id}: {step.title}
//             </span>
//             {currentStep === step.id && (
//               <span className="text-green-500">✓</span>
//             )}
//           </button>
//         ))}
//       </div>

//       <div className="mt-6">{renderStepContent()}</div>
//     </div>
//   );
// }

import { useState } from "react";
import { Images } from "../ui/images";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/pro-regular-svg-icons";

const steps = [
  { id: 1, title: "Choose Your Workforce Model" },
  { id: 2, title: "Location & Staff Structure" },
  { id: 3, title: "Check-In & Check-Out Settings" },
  { id: 4, title: "Job Posting & Client Job Requests" },
  { id: 5, title: "Batch Notification Settings" },
  { id: 6, title: "Notifications & Reminders" },
  { id: 7, title: "Review & Confirm" },
];

const Step1Content = ({ onSave }) => (
  <div className="p-4 rounded-md">
    <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-2 text-sm font-medium rounded-md text-slate-500 bg-slate-100">
        Step 1
      </span>
      <h2 className="text-base font-semibold text-slate-800">
        Choose Your Workforce Model
      </h2>
    </div>

    <p className="mb-4">
      Which best describes your organization’s operations?
      <br />
      (Choose one option to configure your platform settings.)
    </p>
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-2 p-3 border rounded-md cursor-pointer">
        <input
          type="radio"
          name="workforceModel"
          value="Direct Workforce Management"
        />
        <div>
          <strong>Direct Workforce Management</strong>
          <p className="text-sm text-gray-500">
            For organizations managing their own workforce, including internal
            employees and optionally external/contract staff, but without
            external client job requests.
          </p>
        </div>
      </label>
      <label className="flex items-center gap-2 p-3 border rounded-md cursor-pointer">
        <input
          type="radio"
          name="workforceModel"
          value="Client & Casual Workforce"
        />
        <div>
          <strong>Client & Casual Workforce</strong>
          <p className="text-sm text-gray-500">
            For agencies managing external clients and casual/contracted staff,
            where clients request jobs and staff apply for assignments.
          </p>
        </div>
      </label>
    </div>
    <button
      className="px-4 py-2 mt-4 text-white bg-purple-600 rounded-md"
      onClick={onSave} // Hide step content and show steps list
    >
      Save & Close
    </button>
  </div>
);
const Step7Content = ({ onSave }) => (
  <div className="p-4 rounded-md">
    <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-2 text-sm font-medium rounded-md text-slate-500 bg-slate-100">
        Step 7
      </span>
      <h2 className="text-base font-semibold text-slate-800">
        Review & Confirm
      </h2>
    </div>

    <div className="grid justify-center grid-cols-12 ">
      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Selected Workforce Model</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Client & Casual Workforce </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Multiple Locations:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Yes </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Shift Assignment Method</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Manual & Self-Accepted</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Check-In Method:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Geo-Fenced (5 km radius)</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Auto Check-In:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Enabled</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Batch Notifications:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">
            Enabled (20 staff per batch, every 15 minutes)
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Client Job Posting:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Requires Agency Approval</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Quick Job Posting Mode:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Enabled</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Shift Structure:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Multiple Shifts </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">
            Notification Settings Mode:
          </h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">
            Job-Level Configuration Enabled{" "}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Notification Methods:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Push, In-App, Email</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Compliance Tracking:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Enabled</h3>
        </div>
      </div>
    </div>
    <button
      className="px-4 py-2 mt-4 text-white bg-purple-600 rounded-md"
      onClick={onSave} // Hide step content and show steps list
    >
      Save & Close
    </button>
  </div>
);

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(null); // Initially show steps list

  const handleStepClick = (stepId) => {
    setCurrentStep(stepId); // Hide steps list and show step content
  };

  const handleSaveAndClose = () => {
    setCurrentStep(null); // Show steps list and hide step content
  };

  const renderStepContent = () => {
    if (currentStep === 1) return <Step1Content onSave={handleSaveAndClose} />;
    if (currentStep === 2) return <Step1Content onSave={handleSaveAndClose} />;
    if (currentStep === 3) return <Step1Content onSave={handleSaveAndClose} />;
    if (currentStep === 4) return <Step1Content onSave={handleSaveAndClose} />;
    if (currentStep === 5) return <Step1Content onSave={handleSaveAndClose} />;
    if (currentStep === 6) return <Step1Content onSave={handleSaveAndClose} />;
    if (currentStep === 7) return <Step7Content onSave={handleSaveAndClose} />;
    return <div>Step content goes here.</div>;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Show Steps List only if currentStep is null */}
      {currentStep === null ? (
        <>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-center text-gray-900">
              👋 Welcome to weavHR – Organization Workflow Setup
            </h2>
            <h3 className="text-lg text-center text-slate-500">
              Configure your organization&apos;s settings{" "}
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {steps.map((step) => (
              <button
                key={step.id}
                className="flex items-center justify-between gap-4 px-4 py-2.5 text-left border-b last:border-b-0"
                onClick={() => handleStepClick(step.id)}
              >
                <div className="flex items-center gap-4">
                  <span className="px-3 py-2 text-sm font-medium rounded-md text-slate-500 bg-slate-100">
                    Step {step.id}
                  </span>
                  <span className="text-base font-medium text-gray-800">
                    {step.title}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    alt=""
                    src={Images.authPageImages.checkedGreen}
                  ></Image>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-slate-500"
                  ></FontAwesomeIcon>
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="">{renderStepContent()}</div>
      )}
    </div>
  );
}
