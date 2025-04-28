import { Headshot } from './headshot';

export function Host() {
    return (
        <div className="shadow mb-4 ounded-2xl max-w-116 p-4 h-36">
            <div className="flex h-full gap-4 align-middle">
                <div className="flex items-center">
                    <Headshot size={24}  />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex gap-2 items-center">
                        <h3 className="text-2xl text-gray-800">Brandon Briscoe</h3>
                        <span>&middot;</span>
                        <h4 className="text-xl text-gray-600">Host</h4>
                    </div>
                    <p className="text-gray-500">
                        Associate Pastor at Midtown Baptist Temple and Provost of Living Faith Bible Institute.
                    </p>
                </div>
            </div>
        </div>
    )
}