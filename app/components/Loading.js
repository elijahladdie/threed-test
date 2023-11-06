
'use client';

import { Spinner } from 'flowbite-react';

const Loading = () => {
    return (
    <div className='flex items-center justify-center'>
        <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
    )

}
export default Loading;