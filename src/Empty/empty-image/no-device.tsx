import React, { useMemo } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

const NoDevice = ({ colorful = false }) => {
  const id = useMemo(() => {
    return v4();
  }, []);
  const prefixCls = 'ka-component-empty-image';

  return (
    <svg
      className={classnames(prefixCls, `${prefixCls}-no-device`, {
        [`${prefixCls}-colorful`]: colorful,
      })}
      width="230"
      viewBox="0 0 230 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={id}
    >
      <path
        opacity="0.6"
        d="M115.23 102.577C174.805 102.577 223.1 123.347 223.1 148.969L223.099 149.203L7.36449 149.202L7.36035 148.969C7.36035 123.604 54.6943 102.993 113.447 102.583L115.23 102.577Z"
        fill={`url(#paint0_linear_${id})`}
      />
      <path
        d="M200.949 56.417C200.949 56.417 200.686 71.2045 190.182 79.165"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M203.379 73.28C203.379 73.28 200.355 83.7406 192.021 88.9565"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M178.797 96.9887C181.687 96.9887 184.042 95.966 185.257 94.184C185.829 93.3467 186.143 92.3552 186.196 91.2368C186.238 90.3419 186.109 89.3621 185.812 88.3121C185.78 88.1989 185.624 88.1921 185.584 88.3023C184.222 91.9883 180.771 94.8271 176.811 94.8271C176.811 94.8271 180.632 93.8073 183.035 90.6503C183.036 90.6484 183.067 90.6083 183.123 90.5332C183.605 89.8784 184.026 89.1348 184.341 88.2926C184.828 87.1166 185.283 85.5415 185.357 83.6551C185.368 83.3634 185.141 83.1184 184.852 83.1184H184.213C183.922 83.1184 183.69 83.3663 183.709 83.661C183.751 84.3012 183.759 85.4371 183.464 86.6784C182.717 86.577 182.049 86.5262 181.447 86.5262C179.875 86.5262 178.755 86.8717 177.926 87.6124C177.183 88.277 176.774 89.1679 176.34 90.1116C175.678 91.554 174.927 93.1886 172.749 94.4504C172.625 94.5226 172.543 94.6544 172.534 94.7988C172.524 94.9462 172.587 95.0857 172.702 95.1736C174.182 96.3095 176.461 96.9887 178.797 96.9887Z"
        fill={`url(#paint1_linear_${id})`}
      />
      <path
        d="M53.7169 74.6997C53.7169 74.6997 53.4532 89.4872 42.9492 97.4477"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.758 79.0421C77.0945 78.16 77.9547 77.5752 78.916 77.5752H151.9C152.862 77.5752 153.722 78.16 154.058 79.0421L164.645 101.995C164.838 102.5 164.937 103.035 164.937 103.575V118.557H65.8799V103.575C65.8799 103.036 65.9787 102.5 66.1716 101.995L76.758 79.0421Z"
        fill={`url(#paint2_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.1835 101.805H162.633C163.905 101.805 164.937 102.816 164.937 104.062V122.117C164.937 123.363 163.905 124.374 162.633 124.374H68.1835C66.9113 124.374 65.8799 123.363 65.8799 122.117V104.062C65.8799 102.816 66.9113 101.805 68.1835 101.805Z"
        fill={`url(#paint3_linear_${id})`}
      />
      <path
        opacity="0.8"
        d="M150.539 110.269H155.146C155.464 110.269 155.722 110.521 155.722 110.833V115.346C155.722 115.658 155.464 115.911 155.146 115.911H150.539C150.221 115.911 149.963 115.658 149.963 115.346V110.833C149.963 110.521 150.221 110.269 150.539 110.269Z"
        fill="white"
      />
      <path
        opacity="0.8"
        d="M137.805 110.269H142.413C142.731 110.269 142.989 110.521 142.989 110.833V115.346C142.989 115.658 142.731 115.911 142.413 115.911H137.805C137.487 115.911 137.229 115.658 137.229 115.346V110.833C137.229 110.521 137.487 110.269 137.805 110.269Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.758 54.3783C77.0945 53.4961 77.9547 52.9114 78.916 52.9114H151.9C152.862 52.9114 153.722 53.4961 154.058 54.3783L164.645 72.6683C164.838 73.1738 164.937 73.709 164.937 74.2487V89.2307H65.8799V74.2487C65.8799 73.7091 65.9787 73.174 66.1716 72.6686L76.758 54.3783Z"
        fill={`url(#paint4_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M112.646 55.9889C112.481 56.2709 112.082 56.2955 111.884 56.0358L86.227 22.4912C85.9792 22.1672 86.2444 21.7049 86.6491 21.7553L129.469 27.081C129.802 27.1224 129.98 27.494 129.804 27.7792L123.021 38.766C122.902 38.9584 122.661 39.0359 122.452 38.949L102.078 30.4611C102.027 30.4399 101.989 30.5098 102.034 30.5413L119.817 42.9074C120.014 43.0445 120.073 43.3103 119.951 43.5176L112.646 55.9889Z"
        fill={
          colorful
            ? `url(#paint_linear_colorful_${id})`
            : `url(#paint_linear_${id})`
        }
      />
      <path
        d="M122.96 42.7798C122.96 42.7798 137.847 49.9062 137.039 56.7261C136.231 63.546 122.746 68.4638 117.739 70.0642C112.731 71.6647 104.987 75.9589 100.74 81.4198"
        stroke="#EDEFF2"
        strokeWidth="1.38"
        strokeLinecap="round"
        strokeDasharray="2.76 3.68"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.1835 72.479H162.633C163.905 72.479 164.937 73.4894 164.937 74.7358V92.7906C164.937 94.037 163.905 95.0474 162.633 95.0474H68.1835C66.9113 95.0474 65.8799 94.037 65.8799 92.7906V74.7358C65.8799 73.4894 66.9113 72.479 68.1835 72.479Z"
        fill={`url(#paint6_linear_${id})`}
      />
      <path
        opacity="0.8"
        d="M150.539 80.9421H155.146C155.464 80.9421 155.722 81.1947 155.722 81.5063V86.02C155.722 86.3316 155.464 86.5842 155.146 86.5842H150.539C150.221 86.5842 149.963 86.3316 149.963 86.02V81.5063C149.963 81.1947 150.221 80.9421 150.539 80.9421Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id={`paint0_linear_${id}`}
          x1="195.617"
          y1="137.323"
          x2="195.617"
          y2="102.577"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="#E3E4E6" />
        </linearGradient>
        <linearGradient
          id={`paint1_linear_${id}`}
          x1="175.187"
          y1="83.1184"
          x2="175.187"
          y2="91.604"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${id}`}
          x1="81.3729"
          y1="82.3982"
          x2="81.3729"
          y2="110.561"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D2D3D6" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint3_linear_${id}`}
          x1="65.8799"
          y1="101.805"
          x2="65.8799"
          y2="124.374"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint4_linear_${id}`}
          x1="81.3729"
          y1="57.1857"
          x2="81.3729"
          y2="82.1439"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D2D3D6" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_${id}`}
          x1="107.871"
          y1="21.6199"
          x2="107.871"
          y2="56.5799"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DCDDE0" />
          <stop offset="1" stopColor="#CFD1D4" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_colorful_${id}`}
          className={`${prefixCls}-paint-linear-colorful`}
          x1="107.871"
          y1="21.6199"
          x2="107.871"
          y2="56.5799"
          gradientUnits="userSpaceOnUse"
        >
          <stop className={`${prefixCls}-linear-color-1`} />
          <stop offset="1" className={`${prefixCls}-linear-color-2`} />
        </linearGradient>
        <linearGradient
          id={`paint6_linear_${id}`}
          x1="65.8799"
          y1="72.479"
          x2="65.8799"
          y2="95.0474"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NoDevice;
