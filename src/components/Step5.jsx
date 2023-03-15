function Step5(){
    return(
        <>
            <p className="my-2 text-2xl">
                <p className="font-bold">Verify your email address </p>
                <p className="text-sm"> A six digit pin has been sent to email@gmail.com enter into this field to complet your account creation process.</p>
            </p>

            <label className="text-[rgb(167,177,188)]" htmlFor="">Enter Code</label>
            <div className="mb-4 flex justify-between">
                <span className="block h-12 w-12 rounded-md border border-[rgba(145,145,145,0.2)]"></span>
                <span className="block h-12 w-12 rounded-md border border-[rgba(145,145,145,0.2)]"></span>
                <span className="block h-12 w-12 rounded-md border border-[rgba(145,145,145,0.2)]"></span>
                <span className="block h-12 w-12 rounded-md border border-[rgba(145,145,145,0.2)]"></span>
                <span className="block h-12 w-12 rounded-md border border-[rgba(145,145,145,0.2)]"></span>
                <span className="block h-12 w-12 rounded-md border border-[rgba(145,145,145,0.2)]"></span>
            </div>
        </>
    )
}

export default Step5;