function Step2(){
    return(
        <>
            <p className="my-2 text-2xl">
                <p className="font-bold"> Hey Amagbakhen </p>
                <p className="font-bold"> Give us your legal name</p>
            </p>

            <label className="text-[rgb(167,177,188)]" htmlFor="">First Name</label>
            <div className="mb-4">
                <input
                    className="text-[rgb(167,177,188)] rounded-md bg-[rgb(32,37,43)] border border-[rgba(145,145,145,0.2)] h-12 p-2 w-full block my-2"
                    placeholder="Enter username"
                    type="text"/>
            </div>

            <label className="text-[rgb(167,177,188)]" htmlFor="">Last Name</label>
            <div className="mb-4">
                <input
                    className="text-[rgb(167,177,188)] rounded-md bg-[rgb(32,37,43)] border border-[rgba(145,145,145,0.2)] h-12 p-2 w-full block my-2"
                    placeholder="Enter username"
                    type="text"/>
            </div>
        </>
    )
}

export default Step2;