function Step1(){
    return(
        <>
            <p className="my-2 text-2xl">
                <p className="font-bold"> Hey </p>
                <p className="font-bold"> Welcome to Roqqu</p>
            </p>

            <p className="text-base text-[rgb(167,177,188)] mb-4">
                Let’s get to know you! <br/> We’ll need you to choose a really cool name that other users can find you with, choose something cool like superman, or batman 😜
            </p>

            <label className="text-[rgb(167,177,188)]" htmlFor="">Username</label>
            <div>
                <input
                    className="text-[rgb(167,177,188)] rounded-md bg-[rgb(32,37,43)] border border-[rgba(145,145,145,0.2)] h-12 p-2 w-full block my-2"
                    placeholder="Enter username"
                    type="text"/>
            </div>

            <div className="my-4">
                <input type="checkbox"/>
                <p className="inline"> I agree to Roqqu's Terms & conditions and privacy policy</p>
            </div>
        </>
    )
}

export default Step1