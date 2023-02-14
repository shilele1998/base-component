import React, { useMemo } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

const NoMessage = ({ colorful = false }) => {
  const id = useMemo(() => {
    return v4();
  }, []);
  const prefixCls = 'ka-component-empty-image';

  return (
    <svg
      className={classnames(prefixCls, `${prefixCls}-no-message`, {
        [`${prefixCls}-colorful`]: colorful,
      })}
      viewBox="0 0 230 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={id}
    >
      <path
        opacity="0.6"
        d="M115.23 101.2C174.805 101.2 223.1 121.692 223.1 146.97L223.099 147.2L7.36449 147.2L7.36035 146.97C7.36035 121.945 54.6943 101.61 113.447 101.206L115.23 101.2Z"
        fill={`url(#paint0_linear_${id})`}
      />
      <path
        d="M198.667 62.0999C198.667 62.0999 198.403 76.6889 187.899 84.5426"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M201.096 78.7366C201.096 78.7366 198.073 89.0567 189.739 94.2026"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M176.515 102.127C179.404 102.127 181.759 101.118 182.974 99.36C183.546 98.5339 183.861 97.5557 183.914 96.4523C183.956 95.5694 183.827 94.6028 183.53 93.5668C183.498 93.4552 183.342 93.4484 183.302 93.5572C181.939 97.1937 178.489 99.9944 174.529 99.9944C174.529 99.9944 178.35 98.9883 180.752 95.8737C180.754 95.8718 180.785 95.8323 180.841 95.7582C181.323 95.1121 181.744 94.3785 182.059 93.5476C182.546 92.3874 183 90.8335 183.075 88.9724C183.086 88.6845 182.859 88.4429 182.57 88.4429H181.931C181.64 88.4429 181.408 88.6874 181.427 88.9782C181.469 89.6098 181.476 90.7305 181.182 91.9551C180.435 91.855 179.766 91.8049 179.165 91.8049C177.592 91.8049 176.473 92.1458 175.644 92.8765C174.9 93.5322 174.491 94.4112 174.058 95.3422C173.396 96.7652 172.645 98.3779 170.467 99.6228C170.343 99.694 170.261 99.824 170.252 99.9665C170.242 100.112 170.305 100.25 170.42 100.336C171.899 101.457 174.178 102.127 176.515 102.127Z"
        fill={`url(#paint1_linear_${id})`}
      />
      <path
        d="M45.7646 71.3735C45.7646 71.3735 45.0728 86.9166 39.1434 85.711C37.7418 85.426 37.7301 83.5454 38.6503 83.0013C39.5705 82.4571 42.0035 81.9793 42.0035 86.5475C42.0035 91.1157 36.9807 93.7248 33.5801 93.7248"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M70.3809 46.4598C70.3809 35.0275 79.6486 25.7598 91.0809 25.7598H147.201C158.633 25.7598 167.901 35.0275 167.901 46.4598V71.7598C167.901 74.3003 165.841 76.3598 163.301 76.3598H70.3809V46.4598Z"
        fill={`url(#paint2_linear_${id})`}
      />
      <path
        d="M121.9 76.3599H132.48V126.5C132.48 127.516 131.657 128.34 130.64 128.34H123.74C122.724 128.34 121.9 127.516 121.9 126.5V76.3599Z"
        fill={`url(#paint3_linear_${id})`}
      />
      <mask
        id={`mask0_${id}`}
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="121"
        y="76"
        width="12"
        height="53"
      >
        <path
          d="M121.9 76.3599H132.48V126.5C132.48 127.516 131.657 128.34 130.64 128.34H123.74C122.724 128.34 121.9 127.516 121.9 126.5V76.3599Z"
          fill="white"
        />
      </mask>
      <g mask={`url(#mask0_${id})`}>
        <path
          opacity="0.1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M132.48 76.8602C132.48 76.8602 127.7 80.6593 121.9 80.6593L121.785 74.1833H132.48V76.8602Z"
          fill="black"
        />
      </g>
      <path
        opacity="0.8"
        d="M70.3809 46.4598C70.3809 35.0275 79.6486 25.7598 91.0809 25.7598C102.513 25.7598 111.781 35.0275 111.781 46.4598V76.3598H70.3809V46.4598Z"
        fill={`url(#paint4_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M70.2971 76.3599C70.2971 76.3599 62.7577 86.744 65.2709 94.9867C67.784 103.229 81.0708 107.185 94.1672 101.89C107.264 96.5946 111.484 76.3599 111.484 76.3599H70.2971Z"
        fill={`url(#paint5_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86.8817 75.4409C76.4181 79.8825 65.2059 77.0522 61.8386 69.1194C58.4713 61.1865 64.224 51.1551 74.6877 46.7135C85.1513 42.272 96.3635 45.1022 99.7308 53.0351C101.457 57.1027 100.786 61.7221 98.3115 65.8567L101.671 72.8035C102.018 73.5206 101.351 74.3096 100.586 74.0876L92.9431 71.8699C91.1705 73.2684 89.1354 74.4843 86.8817 75.4409Z"
        fill={colorful ? `url(#paint_linear_colorful_${id})` : `#FAFCFF`}
      />
      <circle
        r="2.46988"
        transform="matrix(-0.920505 0.390731 0.390731 0.920505 88.8527 57.2203)"
        fill={colorful ? 'white' : `url(#paint6_linear_${id})`}
      />
      <circle
        r="2.46988"
        transform="matrix(-0.920505 0.390731 0.390731 0.920505 80.2638 60.866)"
        fill={colorful ? 'white' : `url(#paint6_linear_${id})`}
      />
      <circle
        r="2.46988"
        transform="matrix(-0.920505 0.390731 0.390731 0.920505 71.6749 64.5118)"
        fill={colorful ? 'white' : `url(#paint6_linear_${id})`}
      />
      <defs>
        <linearGradient
          id={`paint0_linear_${id}`}
          x1="195.617"
          y1="135.48"
          x2="195.617"
          y2="101.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="#E3E4E6" />
        </linearGradient>
        <linearGradient
          id={`paint1_linear_${id}`}
          x1="172.905"
          y1="88.4429"
          x2="172.905"
          y2="96.8146"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${id}`}
          x1="70.3809"
          y1="25.7598"
          x2="70.3809"
          y2="76.3598"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint3_linear_${id}`}
          x1="132.48"
          y1="76.3599"
          x2="121.9"
          y2="76.3599"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint4_linear_${id}`}
          x1="70.7444"
          y1="75.471"
          x2="111.417"
          y2="75.471"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DCDDE0" />
          <stop offset="1" stopColor="#BEBFC2" />
        </linearGradient>
        <linearGradient
          id={`paint5_linear_${id}`}
          x1="64.6426"
          y1="76.3599"
          x2="64.6426"
          y2="104.295"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_colorful_${id}`}
          className={`${prefixCls}-paint-linear-colorful`}
          x1="74.6867"
          y1="85.7135"
          x2="88.5679"
          y2="118.416"
          gradientUnits="userSpaceOnUse"
        >
          <stop className={`${prefixCls}-linear-color-1`} />
          <stop offset="1" className={`${prefixCls}-linear-color-2`} />
        </linearGradient>
        <linearGradient
          id={`paint6_linear_${id}`}
          x1="0.0433822"
          y1="0"
          x2="0.0433822"
          y2="4.85299"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D7D8DB" />
          <stop offset="1" stopColor="#DCDDE0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NoMessage;
