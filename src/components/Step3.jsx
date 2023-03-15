function Step3(){
    return(
        <>
            <p className="my-2 text-2xl">
                <p className="font-bold"> Thank you Samuel </p>
                <p className="font-bold"> Let's have your phone number</p>
            </p>

            <div className="mb-4">
                <input
                    className="text-[rgb(167,177,188)] rounded-md bg-[rgb(32,37,43)] border border-[rgba(145,145,145,0.2)] h-12 p-2 w-full block my-2"
                    placeholder="+234"
                    type="number"/>
            </div>
        </>
    )
}

export default Step3;