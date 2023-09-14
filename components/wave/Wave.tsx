const Wave = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ WebkitTransition: "0.3s", transition: "0.3s" }}
      version="1.1"
      viewBox="0 0 1440 160"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor="rgba(0, 0, 0, 1)"></stop>
          <stop offset="100%" stopColor="rgba(0, 0, 0, 1)"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient-0)"
        d="M0 16l40 5.3C80 27 160 37 240 58.7 320 80 400 112 480 112s160-32 240-50.7c80-18.3 160-24.3 240-8 80 15.7 160 53.7 240 48C1280 96 1360 48 1440 40s160 24 240 45.3c80 21.7 160 31.7 240 29.4 80-2.7 160-18.7 240-34.7 80-16 160-32 240-40s160-8 240 8 160 48 240 50.7c80 2.3 160-23.7 240-42.7 80-19 160-29 240-37.3 80-7.7 160-13.7 240 8 80 21.3 160 69.3 240 72 80 2.3 160-39.7 240-61.4 80-21.3 160-21.3 240-10.6 80 10.3 160 32.3 240 42.6 80 10.7 160 10.7 240 21.4 80 10.3 160 32.3 240 32 80 .3 160-21.7 240-21.4 80-.3 160 21.7 240 13.4 80-7.7 160-45.7 200-64l40-18.7v128H0z"
      ></path>
    </svg>
  );
};

export default Wave;
