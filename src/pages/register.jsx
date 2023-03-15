import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";
import {useState} from "react";

function Register(){

    const [step, setStep] = useState(1)
    const checkStep = (step) =>{
        if(step === 1){
            return <Step1/>
        }else if(step === 2){
            return <Step2/>
        }else if(step === 3){
            return <Step3/>
        } else if(step === 4){
            return <Step4/>
        }else if(step === 5){
            return <Step5/>
        }
    }

    return(
        <>
            <section className="mx-auto max-w-[52rem] min-h-screen w-[100vw] overflow-x-hidden py-6 px-4">
                <div>
                    <figure className="p-[2.4rem_0_2.4rem]">
                        <img
                            src="https://app.roqqu.com/static/media/roqqu-white-logo.7ccb7284c0912651997f111ac71a917c.svg"
                            alt=""/>
                    </figure>
                </div>
                <div className="flex flex-col justify-start items-stretch flex-1">
                    <div>
                        <div className="text-sm">
                            Step {step}/ <span className="text-[rgb(167,177,188)]">5</span>
                        </div>
                        <div className="flex h-1 items-center mb-4 w-full items-center">
                            <div className="h-1 bg-[rgb(160,210,254)]"></div>
                            <div className="h-1 bg-[rgb(160,210,254)]"></div>
                            <div className="h-1 bg-[rgb(160,210,254)]"></div>
                            <div className="h-1 bg-[rgb(160,210,254)]"></div>
                            <div className="h-1 bg-[rgb(160,210,254)]"></div>
                        </div>
                    </div>

                    <div>
                        {checkStep(step)}

                        <button onClick={()=>setStep(prevState => prevState + 1)} className="h-12 w-full rounded-md bg-[linear-gradient(98.7deg,#5240f9_19.95%,#f3526d_89.51%)]">
                            Continue
                        </button>

                        <p className="mt-2">
                            Already have an account? Sign In
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Register;