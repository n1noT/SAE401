export default function TitleContent({name, category, content}){
    return (
        <div className='text-clr-T-base'>
                <h3 className='text-wrap'>
                    {name}
                </h3>
                <h3 className='opacity-50 overflow-hidden text-nowrap '>
                    {content + ' ' + category}
                </h3>
        </div>
    )
}