import React, { useMemo } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

const NoLocation = ({ colorful = false }) => {
  const id = useMemo(() => {
    return v4();
  }, []);
  const prefixCls = 'ka-component-empty-image';

  return (
    <svg
      className={classnames(prefixCls, `${prefixCls}-no-location`, {
        [`${prefixCls}-colorful`]: colorful,
      })}
      viewBox="0 0 230 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={id}
    >
      <path
        opacity="0.6"
        d="M115.23 105.8C174.805 105.8 223.1 126.292 223.1 151.57L223.099 151.8L7.36449 151.8L7.36035 151.57C7.36035 126.545 54.6943 106.21 113.447 105.806L115.23 105.8Z"
        fill={`url(#paint0_linear_${id})`}
      />
      <path
        d="M190.829 41.8601C190.829 41.8601 190.566 56.4491 180.062 64.3028"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M193.259 58.4968C193.259 58.4968 190.235 68.817 181.901 73.9629"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M168.677 81.8873C171.567 81.8873 173.922 80.8783 175.137 79.1202C175.708 78.2941 176.023 77.3159 176.076 76.2126C176.118 75.3297 175.989 74.3631 175.692 73.3271C175.66 73.2154 175.504 73.2087 175.464 73.3175C174.102 76.9539 170.651 79.7547 166.691 79.7547C166.691 79.7547 170.512 78.7486 172.914 75.6339C172.916 75.632 172.947 75.5925 173.003 75.5184C173.485 74.8724 173.906 74.1387 174.221 73.3078C174.708 72.1477 175.163 70.5937 175.237 68.7327C175.248 68.4448 175.021 68.2031 174.732 68.2031H174.093C173.802 68.2031 173.57 68.4477 173.589 68.7384C173.631 69.37 173.638 70.4907 173.344 71.7154C172.597 71.6153 171.929 71.5652 171.327 71.5652C169.755 71.5652 168.635 71.906 167.806 72.6368C167.063 73.2924 166.653 74.1715 166.22 75.1025C165.558 76.5255 164.807 78.1382 162.629 79.3831C162.505 79.4543 162.423 79.5843 162.414 79.7268C162.404 79.8721 162.467 80.0098 162.582 80.0965C164.062 81.2172 166.34 81.8873 168.677 81.8873Z"
        fill={`url(#paint1_linear_${id})`}
      />
      <path
        d="M64.297 59.8972C64.297 59.8972 64.0333 74.4862 53.5293 82.3399"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        opacity="0.469703"
        d="M76.0775 78.5244H167.733L156.735 122.038H69.1641L76.0775 78.5244Z"
        fill={`url(#paint2_linear_${id})`}
      />
      <path
        d="M72.5603 80.6241L91.4408 75.9478V114.981L69.1641 122.038L72.5603 80.6241Z"
        fill="#E2E4E7"
      />
      <path
        d="M112.949 80.4356L135.226 75.9478V114.981L112.949 122.038V80.4356Z"
        fill="#E2E4E7"
      />
      <path
        d="M112.949 80.4356L91.4406 75.9478V114.981L112.949 122.038V80.4356Z"
        fill="#E2E4E7"
      />
      <path
        d="M153.455 80.6241L135.226 75.9478V114.981L156.734 122.038L153.455 80.6241Z"
        fill="#E2E4E7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72.5603 79.0877L91.4408 74.4114V113.444L69.1641 120.501L72.5603 79.0877Z"
        fill={`url(#paint3_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M112.949 78.8992L135.226 74.4114V113.444L112.949 120.501V78.8992Z"
        fill={`url(#paint4_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M112.949 78.8992L91.4406 74.4114V113.444L112.949 120.501V78.8992Z"
        fill={`url(#paint5_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M153.455 79.0877L135.226 74.4114V113.444L156.734 120.501L153.455 79.0877Z"
        fill={`url(#paint6_linear_${id})`}
      />
      <rect
        opacity="0.59945"
        x="91.0059"
        y="57.9241"
        width="54.0788"
        height="44.2463"
        transform="rotate(-33 91.0059 57.9241)"
        fill={`url(#paint7_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M115.014 95.0322C135.496 74.0562 144.205 62.2648 144.205 51.5612C144.205 35.5057 131.136 22.4902 115.014 22.4902C98.8931 22.4902 85.8242 35.5057 85.8242 51.5612C85.8242 62.2648 94.252 74.0562 115.014 95.0322Z"
        fill={
          colorful
            ? `url(#paint_linear_colorful_${id})`
            : `url(#paint_linear_${id})`
        }
      />
      <circle
        cx="113.631"
        cy="51.6804"
        r="12.5979"
        fill={`url(#paint9_linear_${id})`}
      />
      <circle
        cx="115.169"
        cy="51.6804"
        r="12.5979"
        fill={`url(#paint10_linear_${id}`}
      />
      <defs>
        <linearGradient
          id={`paint0_linear_${id}`}
          x1="195.617"
          y1="140.08"
          x2="195.617"
          y2="105.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="#E3E4E6" />
        </linearGradient>
        <linearGradient
          id={`paint1_linear_${id}`}
          x1="165.067"
          y1="68.2031"
          x2="165.067"
          y2="76.5748"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${id}`}
          x1="105.479"
          y1="72.4049"
          x2="85.2677"
          y2="142.215"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D8D8D8" stopOpacity="0.01" />
          <stop offset="1" stopColor="#D8D8D8" />
        </linearGradient>
        <linearGradient
          id={`paint3_linear_${id}`}
          x1="69.1641"
          y1="74.4114"
          x2="69.1641"
          y2="120.501"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint4_linear_${id}`}
          x1="112.949"
          y1="74.4114"
          x2="112.949"
          y2="120.501"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint5_linear_${id}`}
          x1="112.949"
          y1="74.4114"
          x2="112.949"
          y2="120.501"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint6_linear_${id}`}
          x1="156.734"
          y1="74.4114"
          x2="156.734"
          y2="120.501"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint7_linear_${id}`}
          x1="143.311"
          y1="61.3674"
          x2="90.086"
          y2="79.0781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E9EBEE" stopOpacity="0.01" />
          <stop offset="1" stopColor="#C7C8CB" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_${id}`}
          x1="86.3369"
          y1="22.4902"
          x2="86.3369"
          y2="93.7581"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3E5E8" />
          <stop offset="1" stopColor="#DCDDE0" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_colorful_${id}`}
          className={`${prefixCls}-paint-linear-colorful`}
          x1="86.3369"
          y1="22.4902"
          x2="86.3369"
          y2="93.7581"
          gradientUnits="userSpaceOnUse"
        >
          <stop className={`${prefixCls}-linear-color-1`} />
          <stop offset="1" className={`${prefixCls}-linear-color-2`} />
        </linearGradient>
        <linearGradient
          id={`paint9_linear_${id}`}
          x1="103.763"
          y1="59.3903"
          x2="124.735"
          y2="62.151"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E8EAED" />
          <stop offset="1" stopColor="#EDEFF2" />
        </linearGradient>
        <linearGradient
          id={`paint10_linear_${id}`}
          x1="115.169"
          y1="57.9794"
          x2="127.767"
          y2="57.9794"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7F7F7" />
          <stop offset="1" stopColor="#FDFDFD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NoLocation;
