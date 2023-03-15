function Step4(){
    return(
        <>
            <p className="my-2 text-2xl">
                <p className="font-bold"> Thank you Samuel </p>
                <p className="font-bold"> Enter email and create password</p>
            </p>

            <label className="text-[rgb(167,177,188)]" htmlFor="">Email Address</label>
            <div className="mb-4">
                <input
                    className="text-[rgb(167,177,188)] rounded-md bg-[rgb(32,37,43)] border border-[rgba(145,145,145,0.2)] h-12 p-2 w-full block my-2"

                    placeholder="Enter email"
                    type="email"/>
            </div>

            <label className="text-[rgb(167,177,188)]" htmlFor="">Password</label>
            <div className="mb-4">
                <input
                    className="text-[rgb(167,177,188)] rounded-md bg-[rgb(32,37,43)] border border-[rgba(145,145,145,0.2)] h-12 p-2 w-full block my-2"
                    placeholder="Password"
                    type="password"/>
            </div>
        </>
    )
}

export default Step4;