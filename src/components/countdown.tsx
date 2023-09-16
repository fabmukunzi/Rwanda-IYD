import Countdown from 'react-countdown';

const CcountDown = () => {
  return (
    <Countdown
      className="text-3xl"
      date="2023-09-25T00:00:00"
      intervalDelay={0}
      precision={3}
      renderer={({ days, hours, minutes, completed }) => {
        if (completed) {
          return <span>Countdown expired</span>;
        } else {
          return (
            <div className="flex items-center gap-8 font-sanz">
              <div className='flex flex-col items-center'>
                <div className="bg-[#ffc107] text-primary w-12 h-12 flex justify-center items-center rounded-full font-bold">
                  {days}
                </div>
                <p className="font-semibold">Days</p>
              </div>
              <div className='flex flex-col items-center'>
                <div className="bg-[#ffc107] text-primary w-12 h-12 flex justify-center items-center rounded-full font-bold">
                  {hours}
                </div>
                <p className="font-semibold">Hours</p>
              </div>
              <div className='flex flex-col items-center'>
                <div className="bg-[#ffc107] text-primary w-12 h-12 flex justify-center items-center rounded-full font-bold">
                  {minutes}
                </div>
                <p className="font-semibold">Minutes</p>
              </div>
            </div>
          );
        }
      }}
    />
  );
};

export default CcountDown;
