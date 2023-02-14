import React, { useMemo } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

const Empty = ({ colorful = false }) => {
  const id = useMemo(() => {
    return v4();
  }, []);
  const prefixCls = 'ka-component-empty-image';

  return (
    <svg
      className={classnames(prefixCls, `${prefixCls}-no-data`, {
        [`${prefixCls}-colorful`]: colorful,
      })}
      height="230"
      viewBox="0 0 230 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={id}
    >
      <rect width="230" height="230" fill="white" fillOpacity="0.01" />
      <path
        opacity="0.6"
        d="M115.23 140.2C174.805 140.2 223.1 160.692 223.1 185.97L223.099 186.2L7.36449 186.2L7.36035 185.97C7.36035 160.945 54.6943 140.61 113.447 140.206L115.23 140.2Z"
        fill={`url(#paint0_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.0195 90.9797L112.7 81.6416L162.38 89.5997L115.46 99.5185L63.0195 90.9797Z"
        fill={`url(#paint1_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.0195 90.9797L112.7 81.6416V99.069L63.0195 90.9797Z"
        fill={`url(#paint2_linear_${id})`}
      />
      <g filter={`url(#filter0_d_${id})`}>
        <rect
          width="24.8382"
          height="33.9397"
          rx="7.36"
          transform="matrix(1 -0.000466836 -0.000468182 1 73.1621 86.8235)"
          fill={`url(#paint3_linear_${id})`}
        />
      </g>
      <rect
        width="49.2164"
        height="61.4583"
        rx="7.36"
        transform="matrix(1 -0.000466827 -0.000468172 1 73.168 73.5227)"
        fill={`url(#paint4_linear_${id})`}
      />
      <rect
        width="25.7581"
        height="3.66915"
        rx="1.83458"
        transform="matrix(1 -0.000466821 -0.000468166 1 80.6602 85.7112)"
        fill="white"
      />
      <g filter={`url(#filter1_d_${id})`}>
        <rect
          width="24.8382"
          height="33.9397"
          rx="7.36"
          transform="matrix(1 -0.000466836 -0.000468182 1 96.1621 73.4834)"
          fill={`url(#paint5_linear_${id})`}
        />
      </g>
      <rect
        width="55.8921"
        height="61.4583"
        rx="7.36"
        transform="matrix(1 -0.000466827 -0.000468172 1 96.168 60.1826)"
        fill={
          colorful
            ? `url(#paint_linear_colorful_${id})`
            : `url(#paint_linear_${id})`
        }
        // className={`${prefixCls}-key-path`}
      />
      <rect
        width="25.7581"
        height="3.66915"
        rx="1.83458"
        transform="matrix(1 -0.000466821 -0.000468166 1 103.66 72.3711)"
        fill="white"
      />
      <rect
        width="34.0375"
        height="3.66916"
        rx="1.83458"
        transform="matrix(1 -0.000466819 -0.000468164 1 103.876 82.5522)"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.0195 90.9797L115.46 99.5185V165.5L63.7061 151.923C63.3016 151.817 63.0195 151.451 63.0195 151.033V90.9797Z"
        fill={`url(#paint7_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M115.46 99.4996L162.38 89.5996V150.518C162.38 150.923 162.115 151.28 161.728 151.398L115.46 165.5V99.4996Z"
        fill={`url(#paint8_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M115.46 99.5184L132.76 131.259C132.965 131.636 133.403 131.82 133.816 131.705L179.244 118.956C179.834 118.791 180.1 118.105 179.777 117.585L162.38 89.5996L115.46 99.5184Z"
        fill={`url(#paint9_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.0196 90.9797L49.7444 116.862C49.4789 117.38 49.7546 118.011 50.3149 118.168L98.6042 131.694C99.0293 131.813 99.4791 131.613 99.6759 131.218L115.46 99.5185L63.0196 90.9797Z"
        fill={`url(#paint10_linear_${id})`}
      />
      <path
        d="M212.416 95.0923C212.416 95.0923 212.152 109.681 201.648 117.535"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M214.846 111.729C214.846 111.729 211.822 122.049 203.488 127.195"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M40.2264 85.5271C40.2264 85.5271 37.5494 95.3938 32.4458 92.1433C31.2395 91.375 31.9025 89.6152 32.9566 89.4369C34.0107 89.2587 36.4533 89.6844 34.8162 93.9492C33.1791 98.2141 27.5549 98.8499 24.3802 97.6312"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M190.264 135.119C193.153 135.119 195.508 134.11 196.723 132.352C197.295 131.526 197.61 130.548 197.663 129.445C197.705 128.562 197.576 127.595 197.279 126.559C197.247 126.448 197.091 126.441 197.051 126.55C195.688 130.186 192.238 132.987 188.278 132.987C188.278 132.987 192.099 131.981 194.501 128.866C194.503 128.864 194.534 128.825 194.59 128.751C195.072 128.105 195.493 127.371 195.808 126.54C196.295 125.38 196.749 123.826 196.824 121.965C196.835 121.677 196.608 121.435 196.319 121.435H195.68C195.389 121.435 195.157 121.68 195.176 121.971C195.218 122.602 195.225 123.723 194.931 124.948C194.184 124.847 193.515 124.797 192.914 124.797C191.341 124.797 190.222 125.138 189.393 125.869C188.649 126.525 188.24 127.404 187.807 128.335C187.145 129.758 186.394 131.37 184.216 132.615C184.092 132.686 184.01 132.816 184.001 132.959C183.991 133.104 184.054 133.242 184.169 133.329C185.648 134.449 187.927 135.119 190.264 135.119Z"
        fill={`url(#paint11_linear_${id})`}
      />
      <defs>
        <filter
          id={`filter0_d_${id}`}
          x="63.9494"
          y="78.9954"
          width="43.2477"
          height="52.3443"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2.76"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_754_13744"
          />
          <feOffset dy="1.38" />
          <feGaussianBlur stdDeviation="3.22" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_754_13744"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_754_13744"
            result="shape"
          />
        </filter>
        <filter
          id={`filter1_d_${id}`}
          x="86.9494"
          y="65.6553"
          width="43.2477"
          height="52.3443"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2.76"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_754_13744"
          />
          <feOffset dy="1.38" />
          <feGaussianBlur stdDeviation="3.22" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_754_13744"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_754_13744"
            result="shape"
          />
        </filter>
        <linearGradient
          id={`paint0_linear_${id}`}
          x1="195.617"
          y1="174.48"
          x2="195.617"
          y2="140.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="#E3E4E6" />
        </linearGradient>
        <linearGradient
          id={`paint1_linear_754_13744`}
          x1="33.16"
          y1="72.5656"
          x2="32.53"
          y2="109.629"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E8EAED" />
          <stop offset="1" stopColor="#C8CBCC" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${id}`}
          x1="106.896"
          y1="79.1441"
          x2="73.8633"
          y2="115.738"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3E5E8" />
          <stop offset="1" stopColor="#C5C8CA" />
        </linearGradient>
        <linearGradient
          id={`paint3_linear_${id}`}
          x1="0"
          y1="0"
          x2="0"
          y2="33.9397"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEEF1" />
          <stop offset="1" stopColor="#EDEEF1" />
        </linearGradient>
        <linearGradient
          id={`paint4_linear_${id}`}
          x1="15.0054"
          y1="-15.1391"
          x2="-16.8357"
          y2="20.7769"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E8EAED" />
          <stop offset="1" stopColor="#F0F2F5" />
        </linearGradient>
        <linearGradient
          id={`paint5_linear_${id}`}
          x1="0"
          y1="0"
          x2="0"
          y2="33.9397"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEEF1" />
          <stop offset="1" stopColor="#EDEEF1" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_${id}`}
          x1="0"
          y1="0"
          x2="0"
          y2="61.4583"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_colorful_${id}`}
          className={`${prefixCls}-paint-linear-colorful`}
          x1="36.4805"
          y1="1.31696"
          x2="31.2362"
          y2="58.0189"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.46875" className={`${prefixCls}-linear-color-1`} />
          <stop offset="0.998206" className={`${prefixCls}-linear-color-2`} />
        </linearGradient>
        <linearGradient
          id={`paint7_linear_${id}`}
          x1="111.843"
          y1="192.218"
          x2="173.138"
          y2="114.248"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EAEBED" />
          <stop offset="1" stopColor="#C3C5C7" />
        </linearGradient>
        <linearGradient
          id={`paint8_linear_${id}`}
          x1="166.842"
          y1="152.005"
          x2="145.843"
          y2="34.7042"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#C6C8CA" />
        </linearGradient>
        <linearGradient
          id={`paint9_linear_${id}`}
          x1="247.628"
          y1="95.5285"
          x2="215.148"
          y2="-20.8522"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2F3F5" />
          <stop offset="1" stopColor="#C6C9CB" />
        </linearGradient>
        <linearGradient
          id={`paint10_linear_${id}`}
          x1="164.673"
          y1="142.419"
          x2="191.799"
          y2="23.2714"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2F3F5" />
          <stop offset="1" stopColor="#CBCCCF" />
        </linearGradient>
        <linearGradient
          id={`paint11_linear_${id}`}
          x1="186.654"
          y1="121.435"
          x2="186.654"
          y2="129.807"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Empty;
