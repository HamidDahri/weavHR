"use client";

import React, { useState } from "react";
import Stepper from "../../components/Stepper";
import GetStartedForm from "../../components/GetStartedForm";
import ContactInformationForm from "../../components/ContactInformationForm";
import OrganizationAddressForm from "../../components/OrganizationAddressForm";
import AccountSetupForm from "../../components/AccountSetupForm";
import ReviewForm from "../../components/ReviewForm";
import SideSection from "../../components/SideSection";
const Page = () => {
  type StepContent = {
    title: string;
  };
  const stepperData: StepContent[] = [
    { title: "👋 Let’s get started" },
    { title: "Contact Information" },
    { title: "Organization Address" },
    { title: "Account Setup" },
    { title: "Review" },
  ];

  const [step, setStep] = useState<number>(0);

  return (
    <div className="grid h-screen grid-cols-12 bg-white">
      <div className="hidden md:col-span-4 lg:col-span-3 md:block bg-primary">
        <SideSection></SideSection>
      </div>
      <div className="col-span-12 overflow-scroll md:col-span-8 lg:col-span-9 md:block">
        <div className="pt-20">
          <Stepper steps={stepperData} activeStep={step} />
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-start-4 md:col-span-6 ">
              {step === 0 ? (
                <GetStartedForm
                  onClickHandler={(newStep: number) => setStep(newStep)}
                ></GetStartedForm>
              ) : step === 1 ? (
                <ContactInformationForm
                  onClickHandler={(newStep: number) => setStep(newStep)}
                ></ContactInformationForm>
              ) : step === 2 ? (
                <OrganizationAddressForm
                  onClickHandler={(newStep: number) => setStep(newStep)}
                ></OrganizationAddressForm>
              ) : step === 3 ? (
                <AccountSetupForm
                  onClickHandler={(newStep: number) => setStep(newStep)}
                ></AccountSetupForm>
              ) : step === 4 ? (
                <ReviewForm
                  onClickHandler={(newStep: number) => setStep(newStep)}
                ></ReviewForm>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
