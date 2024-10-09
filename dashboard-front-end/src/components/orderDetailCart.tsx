export default function OrderDetailCart () {

    return (
    <div className="w-[600px] h-[250px] flex bg-[#F7F7F8] rounded-lg">
        <div className="w-[180px] h-[156px]">
            <img className="object-cover" src="/Woman.png" alt="image"/>
        </div>
        <div className="m-4">
            <h2 className="font-extrabold text-[24px] mb-4">WOMEN'S HORSEBIT MULE</h2>
            <div className="text-[#3F4145] text-[14px]">2024-01-20</div>
            <div className="text-[#3F4145] text-[14px] mb-4">Бүтээгдэхүүний ID: 30349049903</div>
            <div className="flex justify-between">
                <div className="text-[#121316] text-[16px]">Тоо ширхэг: 3 * ₮225,700</div> 
                <div className="font-extrabold text-[#121316] text-[16px] text-end">₮677,100</div>
            </div>
        </div>
    </div>
    )
}

