import React, { useMemo } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

const NoNetwork = ({ colorful = false }) => {
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
        d="M115.23 105.62C174.805 105.62 223.1 126.077 223.1 151.311L223.099 151.541L7.36449 151.541L7.36035 151.311C7.36035 126.329 54.6943 106.029 113.447 105.626L115.23 105.62Z"
        fill={`url(#paint0_linear_${id})`}
      />
      <g filter={`url(#filter0_i_${id})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M71.7955 59.4652C72.2319 58.3869 73.3582 57.7559 74.5057 57.9468L79.9942 58.86V79.9379L69.0054 71.0522C68.1553 70.3648 67.8546 69.2023 68.2647 68.1888L71.7955 59.4652Z"
          fill={`url(#paint1_radial_${id})`}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M139.992 36.9085L126.165 31.3936L124.244 36.0792C121.578 35.5692 118.826 35.3022 116.012 35.3022C92.0042 35.3022 72.542 54.7312 72.542 78.698C72.542 102.665 92.0042 122.094 116.012 122.094C140.02 122.094 159.482 102.665 159.482 78.698C159.482 62.8127 150.932 48.921 138.176 41.3586L139.992 36.9085Z"
        fill={`url(#paint2_radial_${id})`}
      />
      <mask
        id={`mask0_${id}`}
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="72"
        y="31"
        width="88"
        height="92"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M139.992 36.9085L126.165 31.3936L124.244 36.0792C121.578 35.5692 118.826 35.3022 116.012 35.3022C92.0042 35.3022 72.542 54.7312 72.542 78.698C72.542 102.665 92.0042 122.094 116.012 122.094C140.02 122.094 159.482 102.665 159.482 78.698C159.482 62.8127 150.932 48.921 138.176 41.3586L139.992 36.9085Z"
          fill="white"
        />
      </mask>
      <g mask={`url(#mask0_${id})`}>
        <g filter={`url(#filter1_f_${id})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M68.9596 89.776C69.9704 87.3316 71.3364 84.7972 73.0457 82.2114C79.2842 72.7738 89.8939 63.0049 103.423 55.2086C116.953 47.4123 130.734 43.1261 142.042 42.4525C145.142 42.2679 148.025 42.3546 150.653 42.7034C147.25 41.7658 143.182 41.4282 138.59 41.7289C136.96 41.8356 135.275 42.0227 133.543 42.2898C123.939 44.1229 113.28 48.0954 102.801 54.1335C92.3258 60.1701 83.5514 67.3948 77.1589 74.7782C76.0596 76.1434 75.0531 77.5084 74.1445 78.8653C71.5885 82.6828 69.8476 86.367 68.9596 89.776ZM67.7779 89.3861C65.0091 96.1299 64.7672 102.406 67.6256 107.347C75.5191 120.993 104.066 119.293 131.386 103.549C158.707 87.8061 174.456 63.9814 166.562 50.3356C163.704 45.3951 158.139 42.4662 150.905 41.4871C153.302 42.1384 155.418 43.0789 157.192 44.3128C160.933 45.7577 163.77 47.9885 165.486 50.9557C169.07 57.152 167.426 65.9648 161.142 75.4716C154.904 84.9091 144.294 94.678 130.765 102.474C117.235 110.271 103.454 114.557 92.1458 115.23C80.7548 115.909 72.286 112.924 68.7017 106.727C66.985 103.759 66.4677 100.191 67.0851 96.2343C66.902 94.0834 67.1442 91.7837 67.7779 89.3861Z"
            fill="#D0D2D6"
          />
        </g>
        <g filter={`url(#filter2_f_${id})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M124.706 34.625L128.924 40.1433L135.931 40.7824L142.405 39.3569L144.578 34.625L139.1 30.6252L130.416 29.752L124.706 30.6252V34.625Z"
            fill="#D7D8DB"
          />
        </g>
      </g>
      <g filter={`url(#filter3_i_${id})`}>
        <ellipse
          rx="7.45051"
          ry="3.72038"
          transform="matrix(0.93988 0.341504 -0.342537 0.939504 133.083 34.1396)"
          fill={`url(#paint3_linear_${id})`}
        />
      </g>
      <g filter={`url(#filter4_i_${id})`}>
        <ellipse
          rx="6.20876"
          ry="2.48025"
          transform="matrix(0.93988 0.341504 -0.342537 0.939504 133.083 34.1397)"
          fill={`url(#paint4_linear_${id})`}
        />
      </g>
      <g filter={`url(#filter5_i_${id})`}>
        <ellipse
          cx="99.8667"
          cy="86.1373"
          rx="9.936"
          ry="9.91903"
          fill={`url(#paint5_linear_${id})`}
        />
      </g>
      <g filter={`url(#filter6_i_${id})`}>
        <ellipse
          cx="110.423"
          cy="54.5204"
          rx="5.589"
          ry="5.57946"
          fill={`url(#paint6_linear_${id})`}
        />
      </g>
      <g filter={`url(#filter7_i_${id})`}>
        <ellipse
          cx="132.159"
          cy="86.1374"
          rx="3.726"
          ry="3.71964"
          fill={`url(#paint7_linear_${id})`}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M139.896 41.368C139.867 41.0265 140.12 40.7262 140.462 40.6973C152.752 39.6582 162.8 42.5911 167.099 50.0232C171.227 57.1596 169.104 66.8049 162.697 76.4965C156.268 86.2228 145.422 96.1767 131.696 104.086C117.97 111.996 103.91 116.394 92.2558 117.089C80.6434 117.78 71.2125 114.793 67.0844 107.657C63.0173 100.626 65.0195 91.1588 71.2038 81.6154C71.3902 81.3278 71.7749 81.2457 72.0631 81.4321C72.3513 81.6184 72.4338 82.0027 72.2474 82.2903C66.1459 91.7059 64.4508 100.623 68.1606 107.037C71.9262 113.547 80.7158 116.533 92.1807 115.85C103.604 115.169 117.478 110.845 131.074 103.011C144.669 95.1769 155.358 85.3462 161.66 75.8122C167.985 66.2436 169.789 57.1531 166.023 50.6433C162.101 43.8624 152.725 40.9062 140.568 41.934C140.226 41.9629 139.925 41.7095 139.896 41.368Z"
        fill={`url(#paint8_linear_${id})`}
      />
      <path
        d="M153.006 47.5276C153.006 44.384 153.006 42.8122 153.628 41.6158C154.151 40.6076 154.973 39.7856 155.982 39.2619C157.178 38.6404 158.75 38.6404 161.893 38.6404H181.379C184.523 38.6404 186.094 38.6404 187.291 39.2619C188.299 39.7856 189.121 40.6076 189.645 41.6158C190.266 42.8122 190.266 44.384 190.266 47.5276V67.0132C190.266 70.1568 190.266 71.7286 189.645 72.925C189.121 73.9331 188.299 74.7552 187.291 75.2789C186.094 75.9004 184.523 75.9004 181.379 75.9004H149.146C148.081 75.9004 147.549 75.9004 147.292 75.6825C147.078 75.5014 146.958 75.2327 146.966 74.9526C146.977 74.6156 147.333 74.2198 148.045 73.4283L151.865 69.1835C152.292 68.7099 152.505 68.4731 152.656 68.2027C152.784 67.9727 152.879 67.7256 152.938 67.4687C153.006 67.1667 153.006 66.8481 153.006 66.2109V47.5276Z"
        fill={
          colorful
            ? `url(#paint_linear_colorful_${id})`
            : `url(#paint_linear_${id})`
        }
      />
      <circle cx="166.58" cy="62.3269" r="2.39529" fill="white" />
      <path
        d="M173.345 64.7223C173.617 63.967 173.766 63.153 173.766 62.3046C173.766 58.3483 170.54 55.1411 166.561 55.1411C165.728 55.1411 164.929 55.2815 164.185 55.5398"
        stroke="white"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M180.472 64.7223C180.612 63.9264 180.685 63.1074 180.685 62.2714C180.685 54.5118 174.375 48.2214 166.59 48.2214C165.77 48.2214 164.966 48.2912 164.185 48.4252"
        stroke="white"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <ellipse
        cx="49.565"
        cy="117.754"
        rx="3.105"
        ry="3.0997"
        fill={`url(#paint10_radial_${id}`}
      />
      <ellipse
        cx="181.217"
        cy="93.9669"
        rx="3.105"
        ry="3.0997"
        fill={`url(#paint11_radial_${id}`}
      />
      <ellipse
        cx="52.0485"
        cy="102.875"
        rx="1.863"
        ry="1.85982"
        fill={`url(#paint12_radial_${id}`}
      />
      <ellipse
        cx="157.803"
        cy="132.736"
        rx="1.863"
        ry="1.85982"
        fill={`url(#paint13_radial_${id}`}
      />
      <defs>
        <filter
          id={`filter0_i_${id}`}
          x="65.783"
          y="57.9128"
          width="14.2111"
          height="22.0251"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2.3" />
          <feGaussianBlur stdDeviation="1.84" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result={`effect1_innerShadow_${id}`}
          />
        </filter>
        <filter
          id={`filter1_f_${id}`}
          x="38.58"
          y="14.4782"
          width="157.027"
          height="129.096"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="13.5044"
            result={`effect1_foregroundBlur_${id}`}
          />
        </filter>
        <filter
          id={`filter2_f_${id}`}
          x="114.578"
          y="19.6236"
          width="40.1287"
          height="31.2872"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5.06416"
            result={`effect1_foregroundBlur_${id}`}
          />
        </filter>
        <filter
          id={`filter3_i_${id}`}
          x="123.664"
          y="29.8159"
          width="16.5373"
          height="8.64722"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2.3" />
          <feGaussianBlur stdDeviation="1.84" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result={`effect1_foregroundBlur_${id}`}
          />
        </filter>
        <filter
          id={`filter4_i_${id}`}
          x="124.885"
          y="30.9893"
          width="14.0959"
          height="6.30103"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2.3" />
          <feGaussianBlur stdDeviation="1.84" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result={`effect1_foregroundBlur_${id}`}
          />
        </filter>
        <filter
          id={`filter5_i_${id}`}
          x="87.6307"
          y="76.2183"
          width="22.1721"
          height="19.8381"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2.3" />
          <feGaussianBlur stdDeviation="1.84" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result={`effect1_foregroundBlur_${id}`}
          />
        </filter>
        <filter
          id={`filter6_i_${id}`}
          x="102.534"
          y="48.9409"
          width="13.4777"
          height="11.1589"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2.3" />
          <feGaussianBlur stdDeviation="1.84" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result={`effect1_foregroundBlur_${id}`}
          />
        </filter>
        <filter
          id={`filter7_i_${id}`}
          x="126.133"
          y="82.4177"
          width="9.75215"
          height="7.43921"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2.3" />
          <feGaussianBlur stdDeviation="1.84" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result={`effect1_foregroundBlur_${id}`}
          />
        </filter>
        <linearGradient
          id={`paint0_linear_${id}`}
          x1="195.617"
          y1="139.841"
          x2="195.617"
          y2="105.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="#E3E4E6" />
        </linearGradient>
        <radialGradient
          id={`paint1_radial_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(72.6238 61.4577) rotate(84.0527) scale(24.6955 14.0721)"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#D2D3D6" />
        </radialGradient>
        <radialGradient
          id={`paint2_radial_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(104.509 48.1831) rotate(79.7681) scale(88.0032 84.59)"
        >
          <stop stopColor="#F2F4F7" />
          <stop offset="1" stopColor="#EDEFF2" />
        </radialGradient>
        <linearGradient
          id={`paint3_linear_${id}`}
          x1="13.1647"
          y1="7.44076"
          x2="13.1647"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2F4F7" />
          <stop offset="1" stopColor="#E8EAED" />
        </linearGradient>
        <linearGradient
          id={`paint4_linear_${id}`}
          x1="10.4545"
          y1="4.97408"
          x2="10.7009"
          y2="0.50216"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3E5EB" />
          <stop offset="1" stopColor="#C1C3C7" />
        </linearGradient>
        <linearGradient
          id={`paint5_linear_${id}`}
          x1="104.779"
          y1="97.1865"
          x2="111.893"
          y2="81.7221"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3E5EB" />
          <stop offset="1" stopColor="#DADCE0" />
        </linearGradient>
        <linearGradient
          id={`paint6_linear_${id}`}
          x1="121.862"
          y1="65.5446"
          x2="135.474"
          y2="39.5089"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3E5EB" />
          <stop offset="1" stopColor="#D2D4D9" />
        </linearGradient>
        <linearGradient
          id={`paint7_linear_${id}`}
          x1="133.84"
          y1="91.6467"
          x2="137.416"
          y2="84.9097"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3E5EB" />
          <stop offset="1" stopColor="#C8C9CC" />
        </linearGradient>
        <linearGradient
          id={`paint8_linear_${id}`}
          x1="24.7155"
          y1="95.7423"
          x2="61.5172"
          y2="178.004"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEEF1" />
          <stop offset="1" stopColor="#CCCFD9" />
        </linearGradient>
        <linearGradient
          id={`paint9_linear_${id}`}
          x1="168.043"
          y1="38.6404"
          x2="168.043"
          y2="75.9004"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6395FF" />
          <stop offset="1" stopColor="#3A6FF8" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_${id}`}
          x1="168.043"
          y1="38.6404"
          x2="168.043"
          y2="75.9004"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.25" stopColor="#EBECEE" />
          <stop offset="1" stopColor="#DEDFE2" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_colorful_${id}`}
          className={`${prefixCls}-paint-linear-colorful`}
          x1="168.043"
          y1="38.6404"
          x2="168.043"
          y2="75.9004"
          gradientUnits="userSpaceOnUse"
        >
          <stop className={`${prefixCls}-linear-color-1`} />
          <stop offset="1" className={`${prefixCls}-linear-color-2`} />
        </linearGradient>
        <radialGradient
          id={`paint10_radial_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(48.7433 115.802) rotate(79.3176) scale(6.02379 6.03338)"
        >
          <stop stopColor="#F2F4F7" />
          <stop offset="1" stopColor="#D4D6D9" />
        </radialGradient>
        <radialGradient
          id={`paint11_radial_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(180.396 92.0148) rotate(79.3176) scale(6.02379 6.03338)"
        >
          <stop stopColor="#F2F4F7" />
          <stop offset="1" stopColor="#D4D6D9" />
        </radialGradient>
        <radialGradient
          id={`paint12_radial_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(51.5556 101.704) rotate(79.3176) scale(3.61427 3.62003)"
        >
          <stop stopColor="#F2F4F7" />
          <stop offset="1" stopColor="#D4D6D9" />
        </radialGradient>
        <radialGradient
          id={`paint13_radial_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(157.31 131.565) rotate(79.3176) scale(3.61427 3.62003)"
        >
          <stop stopColor="#F2F4F7" />
          <stop offset="1" stopColor="#D4D6D9" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default NoNetwork;
