import React, { useMemo } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

const NoService = ({ colorful = false }) => {
  const id = useMemo(() => {
    return v4();
  }, []);
  const prefixCls = 'ka-component-empty-image';

  return (
    <svg
      className={classnames(prefixCls, `${prefixCls}-no-service`, {
        [`${prefixCls}-colorful`]: colorful,
      })}
      viewBox="0 0 230 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={id}
    >
      <path
        opacity="0.6"
        d="M115.23 105.939C174.805 105.939 223.1 126.458 223.1 151.77L223.099 152L7.36449 152L7.36035 151.77C7.36035 126.711 54.6943 106.35 113.447 105.946L115.23 105.939Z"
        fill={`url(#paint0_linear_${id})`}
      />
      <path
        d="M49.812 38.9059C49.812 38.9059 46.7695 53.1954 34.9599 58.908"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M202.79 53.8911C202.79 53.8911 202.526 68.4994 192.022 76.3634"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M205.22 70.5496C205.22 70.5496 202.196 80.8833 193.862 86.036"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M180.638 93.971C183.527 93.971 185.882 92.9606 187.097 91.2003C187.669 90.3731 187.984 89.3936 188.037 88.2888C188.079 87.4048 187.95 86.4368 187.653 85.3995C187.621 85.2877 187.465 85.2809 187.425 85.3899C186.062 89.0311 182.612 91.8356 178.652 91.8356C178.652 91.8356 182.473 90.8281 184.875 87.7094C184.877 87.7075 184.908 87.668 184.964 87.5937C185.446 86.9468 185.867 86.2122 186.182 85.3802C186.669 84.2185 187.123 82.6626 187.198 80.799C187.209 80.5108 186.982 80.2688 186.693 80.2688H186.054C185.763 80.2688 185.531 80.5137 185.55 80.8048C185.592 81.4372 185.599 82.5594 185.305 83.7857C184.558 83.6854 183.889 83.6353 183.288 83.6353C181.715 83.6353 180.596 83.9766 179.767 84.7083C179.024 85.3648 178.614 86.245 178.181 87.1772C177.519 88.6021 176.768 90.2169 174.59 91.4635C174.466 91.5348 174.384 91.6649 174.375 91.8076C174.365 91.9532 174.428 92.0911 174.543 92.1778C176.023 93.3 178.301 93.971 180.638 93.971Z"
        fill={`url(#paint1_linear_${id})`}
      />
      <rect
        x="70.9209"
        y="40.6038"
        width="90.263"
        height="20.6235"
        rx="4.1216"
        fill={`url(#paint2_linear_${id})`}
      />
      <rect
        x="70.9209"
        y="66.177"
        width="90.263"
        height="20.6235"
        rx="4.1216"
        fill={`url(#paint3_linear_${id})`}
      />
      <rect
        x="70.9209"
        y="91.7502"
        width="90.263"
        height="20.6235"
        rx="4.1216"
        fill={`url(#paint4_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.9883 59.6277C79.9883 58.262 81.0955 57.1548 82.4612 57.1548H109.664C111.03 57.1548 112.137 58.262 112.137 59.6277V61.2272H79.9883V59.6277Z"
        fill={`url(#paint5_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.9883 85.201C79.9883 83.8352 81.0955 82.728 82.4612 82.728H109.664C111.03 82.728 112.137 83.8352 112.137 85.201V86.8004H79.9883V85.201Z"
        fill={`url(#paint6_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.4612 108.301C81.0955 108.301 79.9883 109.408 79.9883 110.774V112.374H79.9883V113.2C79.9883 114.566 81.0955 115.673 82.4613 115.673H145.934C147.3 115.673 148.407 114.566 148.407 113.2V111.961H112.137V110.774C112.137 109.408 111.03 108.301 109.664 108.301H82.4612Z"
        fill={`url(#paint7_linear_${id})`}
      />
      <ellipse
        opacity="0.8"
        cx="149.643"
        cy="50.9155"
        rx="3.29728"
        ry="3.29977"
        fill="white"
      />
      <rect
        x="125.12"
        y="50.7588"
        width="23.184"
        height="1.25745"
        fill="#F7F9FC"
      />
      <rect
        x="125.12"
        y="76.1228"
        width="23.184"
        height="1.25745"
        fill="#F7F9FC"
      />
      <rect
        x="125.12"
        y="101.789"
        width="23.184"
        height="1.25745"
        fill="#F7F9FC"
      />
      <ellipse
        opacity="0.8"
        cx="149.643"
        cy="76.4887"
        rx="3.29728"
        ry="3.29977"
        fill="white"
      />
      <ellipse
        opacity="0.8"
        cx="149.643"
        cy="102.062"
        rx="3.29728"
        ry="3.29977"
        fill="white"
      />
      <rect
        x="79.9883"
        y="60.8149"
        width="0.82432"
        height="5.36212"
        fill="#D7D9DB"
      />
      <rect
        x="111.312"
        y="60.8149"
        width="0.82432"
        height="5.36212"
        fill="#D7D9DB"
      />
      <rect
        x="79.9883"
        y="86.8005"
        width="0.82432"
        height="5.36212"
        fill="#D7D9DB"
      />
      <rect
        x="111.312"
        y="86.8005"
        width="0.82432"
        height="5.36212"
        fill="#D7D9DB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M94.6917 108.685L75.7419 76.1254C73.4241 72.1447 69.6361 72.1447 67.3188 76.1254L48.369 108.685C46.0518 112.669 47.9475 115.92 52.5787 115.92H90.4818C95.1131 115.92 97.0069 112.669 94.6917 108.685Z"
        fill={
          colorful
            ? `url(#paint_linear_colorful_${id})`
            : `url(#paint_linear_${id})`
        }
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.775 89.1407C70.2943 88.5935 70.9546 88.3198 71.7599 88.3198C72.5657 88.3198 73.2254 88.5906 73.7453 89.1298C74.2618 89.6702 74.52 90.346 74.52 91.1587C74.52 91.8579 73.4418 96.9994 73.0822 100.74H70.4853C70.1699 96.9993 69 91.8579 69 91.1587C69.0001 90.3583 69.2587 89.6853 69.775 89.1407Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M73.7056 107.298C73.1601 107.833 72.511 108.1 71.7598 108.1C71.0087 108.1 70.3595 107.833 69.8142 107.298C69.2703 106.764 69 106.118 69 105.358C69 104.603 69.2703 103.95 69.8142 103.402C70.3595 102.854 71.0087 102.58 71.7598 102.58C72.511 102.58 73.1601 102.854 73.7056 103.402C74.2491 103.95 74.52 104.603 74.52 105.358C74.52 106.118 74.2491 106.764 73.7056 107.298Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id={`paint0_linear_${id}`}
          x1="195.617"
          y1="140.265"
          x2="195.617"
          y2="105.939"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="#E3E4E6" />
        </linearGradient>
        <linearGradient
          id={`paint1_linear_${id}`}
          x1="177.028"
          y1="80.2688"
          x2="177.028"
          y2="88.6515"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${id}`}
          x1="70.9209"
          y1="40.6038"
          x2="70.9209"
          y2="61.2273"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint3_linear_${id}`}
          x1="70.9209"
          y1="66.177"
          x2="70.9209"
          y2="86.8005"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint4_linear_${id}`}
          x1="70.9209"
          y1="91.7502"
          x2="70.9209"
          y2="112.374"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint5_linear_${id}`}
          x1="80.3107"
          y1="57.1649"
          x2="80.3107"
          y2="61.1557"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#DCDDE0" />
        </linearGradient>
        <linearGradient
          id={`paint6_linear_${id}`}
          x1="80.2706"
          y1="82.728"
          x2="80.2706"
          y2="86.7289"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00254043" stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#DCDDE0" />
        </linearGradient>
        <linearGradient
          id={`paint7_linear_${id}`}
          x1="80.5892"
          y1="108.301"
          x2="80.5892"
          y2="115.544"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00254043" stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#DCDDE0" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_${id}`}
          x1="0"
          y1="0"
          x2="0"
          y2="61.4583"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3125" stopColor="#E3E4E9" />
          <stop offset="1" stopColor="#CDCFD5" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_colorful_${id}`}
          className={`${prefixCls}-paint-linear-colorful`}
          x1="71.5299"
          y1="73.1399"
          x2="71.5299"
          y2="115.92"
          gradientUnits="userSpaceOnUse"
        >
          <stop className={`${prefixCls}-linear-color-1`} />
          <stop offset="1" className={`${prefixCls}-linear-color-2`} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NoService;
