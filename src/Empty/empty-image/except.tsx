import React, { useMemo } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

const Expect = ({ colorful = false }) => {
  const id = useMemo(() => {
    return v4();
  }, []);
  const prefixCls = 'ka-component-empty-image';

  return (
    <svg
      className={classnames(prefixCls, `${prefixCls}-no-except`, {
        [`${prefixCls}-colorful`]: colorful,
      })}
      viewBox="0 0 230 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={id}
    >
      <path
        opacity="0.6"
        d="M115.23 105.939C174.805 105.939 223.1 126.458 223.1 151.769L223.099 152L7.36449 152L7.36035 151.769C7.36035 126.711 54.6943 106.35 113.447 105.945L115.23 105.939Z"
        fill={`url(#paint0_linear_${id})`}
      />
      <path
        d="M56.5875 54.0935C56.5875 54.0935 56.2854 70.8355 44.2471 79.8482"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M59.3726 73.1853C59.3726 73.1853 55.9075 85.0285 46.3564 90.9337"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.2006 100.028C34.5119 100.028 37.2109 98.8699 38.6034 96.8524C39.2589 95.9044 39.6197 94.7819 39.6804 93.5157C39.7278 92.5025 39.58 91.3932 39.2401 90.2044C39.2037 90.0762 39.0249 90.0685 38.9786 90.1933C37.4172 94.3664 33.4626 97.5805 28.9242 97.5805C28.9242 97.5805 33.3037 96.4259 36.0567 92.8516C36.0589 92.8494 36.0942 92.8041 36.1582 92.7191C36.7111 91.9777 37.1933 91.1358 37.5541 90.1823C38.1124 88.8509 38.6332 87.0676 38.7182 84.9319C38.7314 84.6015 38.471 84.3242 38.14 84.3242H37.4073C37.0741 84.3242 36.8082 84.6049 36.8302 84.9385C36.8777 85.6633 36.8865 86.9494 36.5489 88.3548C35.6926 88.2399 34.9268 88.1824 34.2372 88.1824C32.4353 88.1824 31.152 88.5736 30.202 89.4122C29.3501 90.1646 28.8812 91.1733 28.3846 92.2417C27.6255 93.8748 26.7648 95.7254 24.2689 97.154C24.1265 97.2358 24.0327 97.3849 24.0228 97.5485C24.0107 97.7153 24.0835 97.8733 24.2148 97.9727C25.9108 99.2588 28.5226 100.028 31.2006 100.028Z"
        fill={`url(#paint1_linear_${id})`}
      />
      <path
        d="M199.053 56.4513C199.053 56.4513 195.566 72.8279 182.032 79.375"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M162.857 73.7644L117.327 100.227L71.7959 73.7644C71.7959 73.7425 71.7959 73.7134 71.8034 73.6915C71.8404 73.5233 74.3536 71.4557 78.1861 68.3874C78.2231 68.3584 78.2526 68.329 78.2899 68.2996C90.8624 58.2393 117.327 37.6365 117.327 37.6365C117.327 37.6365 143.791 58.2393 156.364 68.2996C160.255 71.4121 162.813 73.5162 162.85 73.6915C162.857 73.7131 162.857 73.7425 162.857 73.7644Z"
        fill="#00AEF0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M162.857 73.7644L117.327 100.227L71.7959 73.7644C71.7959 73.7425 71.7959 73.7134 71.8034 73.6915C71.8404 73.5233 74.3536 71.4557 78.1861 68.3874C78.2231 68.3584 78.2526 68.329 78.2899 68.2996C90.8624 58.2393 117.327 37.6365 117.327 37.6365C117.327 37.6365 143.791 58.2393 156.364 68.2996C160.255 71.4121 162.813 73.5162 162.85 73.6915C162.857 73.7131 162.857 73.7425 162.857 73.7644Z"
        fill={`url(#paint2_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M137.135 27.6213H89.2629C85.1569 27.6213 81.8281 30.9346 81.8281 35.0214V107.066C81.8281 111.153 85.1569 114.466 89.2629 114.466H149.249C153.355 114.466 156.684 111.152 156.684 107.066V46.5005L137.135 27.6213Z"
        fill={`url(#paint3_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M137.291 39.3214C137.291 43.2876 140.708 46.5025 144.922 46.5025H156.683L137.291 27.6213V39.3214Z"
        fill={`url(#paint4_linear_${id})`}
      />
      <rect
        x="92.5391"
        y="48.4194"
        width="40.4165"
        height="5.39596"
        rx="2.69798"
        fill="white"
      />
      <path
        d="M143.633 48.5326C144.171 48.0353 145.009 48.0683 145.505 48.6063C145.983 49.1236 145.971 49.9195 145.492 50.422L145.432 50.4809L141.951 53.7023C141.468 54.1495 140.735 54.1715 140.227 53.766L140.162 53.7107L137.566 51.3523C137.024 50.86 136.983 50.0211 137.474 49.4785C137.947 48.9567 138.74 48.8989 139.282 49.3328L139.346 49.3873L141.043 50.9291L143.633 48.5326Z"
        fill="white"
      />
      <rect
        x="137.528"
        y="59.7725"
        width="7.93019"
        height="7.94062"
        rx="1.49084"
        fill="white"
      />
      <rect
        x="137.528"
        y="73.6274"
        width="7.93019"
        height="7.94062"
        rx="1.49084"
        fill="white"
      />
      <rect
        x="92.5391"
        y="61.0444"
        width="35.7696"
        height="5.39596"
        rx="2.69798"
        fill="white"
      />
      <rect
        x="92.5391"
        y="74.8999"
        width="32.2368"
        height="5.39596"
        rx="2.69798"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M162.857 73.7645L162.455 116.906C162.455 119.929 159.972 122.4 156.934 122.4H77.3425C74.3043 122.4 71.8359 119.929 71.8359 116.906V73.6487L117.146 100.234L162.857 73.7645Z"
        fill={`url(#paint5_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M162.857 73.7644L76.226 119.801C74.9564 120.476 75.4358 122.4 76.8736 122.4H156.877C160.18 122.4 162.857 119.723 162.857 116.42V73.7644Z"
        fill={`url(#paint6_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M184.392 115.737L165.442 83.1347C163.124 79.1488 159.336 79.1488 157.019 83.1347L138.069 115.737C135.752 119.727 137.648 122.982 142.279 122.982H180.182C184.813 122.981 186.707 119.726 184.392 115.737Z"
        fill={
          colorful
            ? `url(#paint_linear_colorful_${id})`
            : `url(#paint_linear_${id})`
        }
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M159.475 96.1672C159.995 95.6192 160.655 95.3452 161.46 95.3452C162.266 95.3452 162.926 95.6164 163.445 96.1562C163.962 96.6973 164.22 97.374 164.22 98.1878C164.22 98.8879 163.142 104.036 162.782 107.782H160.185C159.87 104.036 158.7 98.8879 158.7 98.1878C158.7 97.3864 158.959 96.7125 159.475 96.1672Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M163.406 114.349C162.86 114.884 162.211 115.151 161.46 115.151C160.709 115.151 160.06 114.884 159.514 114.349C158.971 113.814 158.7 113.167 158.7 112.406C158.7 111.65 158.971 110.996 159.514 110.447C160.06 109.898 160.709 109.624 161.46 109.624C162.211 109.624 162.86 109.898 163.406 110.447C163.949 110.996 164.22 111.65 164.22 112.406C164.22 113.167 163.949 113.814 163.406 114.349Z"
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
          x1="27.0627"
          y1="84.3242"
          x2="27.0627"
          y2="93.9313"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${id}`}
          x1="72.5956"
          y1="37.6365"
          x2="72.5956"
          y2="99.1275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9DBE2" />
          <stop offset="1" stopColor="#DADCE3" />
        </linearGradient>
        <linearGradient
          id={`paint3_linear_${id}`}
          x1="104.651"
          y1="6.22882"
          x2="60.1702"
          y2="60.2323"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E8EAED" />
          <stop offset="1" stopColor="#F0F2F5" />
        </linearGradient>
        <linearGradient
          id={`paint4_linear_${id}`}
          x1="143.203"
          y1="22.9703"
          x2="133.986"
          y2="36.3051"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D7D8DB" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint5_linear_${id}`}
          x1="23.4919"
          y1="89.081"
          x2="39.5442"
          y2="153.205"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint6_linear_${id}`}
          x1="71.3359"
          y1="73.7644"
          x2="71.3359"
          y2="122.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_${id}`}
          x1="161.23"
          y1="80.1453"
          x2="161.23"
          y2="122.982"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3125" stopColor="#E3E4E9" />
          <stop offset="1" stopColor="#CDCFD5" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_colorful_${id}`}
          className={`${prefixCls}-paint-linear-colorful`}
          x1="161.23"
          y1="80.1453"
          x2="161.23"
          y2="122.982"
          gradientUnits="userSpaceOnUse"
        >
          <stop className={`${prefixCls}-linear-color-1`} />
          <stop offset="1" className={`${prefixCls}-linear-color-2`} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Expect;
