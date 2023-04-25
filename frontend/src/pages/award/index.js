import clsx from 'clsx'
import SessionHeader from 'components/sessionHeader'
import {
    MDBContainer,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
    MDBBtn,
} from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import log from 'eslint-plugin-react/lib/util/log'

export default function Award() {
    const homeSliders_SV5T = [
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648228476/2021-2022/ICPC%202021/Anh_ICPC-2021_zbpafy.jpg',
            title: 'ICPC 2021',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648147033/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/Tuyen_duong_SV5T_oepslz.jpg',
            title: 'SV5T',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]

    const SV5T_2019_2020 = [
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648229638/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/SV5T_-_2020_2021_esdmu8.png',
            title: 'SINH VIÊN 5 TỐT NĂM HỌC 2019-2020',
            content:
                '✍️Sinh viên 5 Tốt là danh hiệu cao quý của sinh viên Việt Nam đã được đưa vào hệ thống khen thưởng cấp Quốc gia và ngày càng trở thành danh hiệu có uy tín, là minh chứng cho sự cố gắng, nỗ lực không chỉ của mỗi cá nhân sinh viên mà còn là sự phấn đấu của tập thể Liên Chi hội...',
        }
    ]

    const SV5T_2020_2021 = [
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648146506/2021-2022/Tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T%20-%20IT%20Show/SV5T-IT_Show_dtuand.jpg',
            title: 'SINH VIÊN 5 TỐT NĂM HỌC 2020 - 2021',
            content:
                `✍️Sinh viên 5 Tốt là danh hiệu cao quý của sinh viên Việt Nam đã được đưa vào hệ thống khen thưởng cấp Quốc gia và ngày càng trở thành danh hiệu có uy tín, là minh chứng cho sự cố gắng, nỗ lực không chỉ của mỗi cá nhân sinh viên mà còn là sự phấn đấu của tập thể Liên Chi hội... Các tiêu chí Sinh viên 5 tốt: Phong trào "Sinh viên 5 tốt" là phong trào lớn trong sinh viên, nhằm hướng tới việc xây dựng môi trường, giúp sinh viên phát triển và rèn luyện bản thân dựa trên 5 tiêu chí: 💌·Đạo đức tốt, 📚Học tập tốt, 🏀Thể lực tốt, 🧡Tình nguyện tốt🌏Hội nhập tốt`,
        }
    ]

    const SV5T_2021_2022 = [
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1682446721/tdsv5t_2122_s6ticw.jpg',
            title: 'SINH VIÊN 5 TỐT NĂM HỌC 2021 - 2022',
            content:
                `✍️Sinh viên 5 Tốt là danh hiệu cao quý của sinh viên Việt Nam đã được đưa vào hệ thống khen thưởng cấp Quốc gia và ngày càng trở thành danh hiệu có uy tín, là minh chứng cho sự cố gắng, nỗ lực không chỉ của mỗi cá nhân sinh viên mà còn là sự phấn đấu của tập thể Liên Chi hội... Các tiêu chí Sinh viên 5 tốt: Phong trào "Sinh viên 5 tốt" là phong trào lớn trong sinh viên, nhằm hướng tới việc xây dựng môi trường, giúp sinh viên phát triển và rèn luyện bản thân dựa trên 5 tiêu chí: 💌·Đạo đức tốt, 📚Học tập tốt, 🏀Thể lực tốt, 🧡Tình nguyện tốt🌏Hội nhập tốt`,
        }
    ]

    const awards_SV5T_2019_2020 = [
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648227904/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/HTTV_qjecjb.jpg',
                title: 'Huỳnh Thị Thúy Vy',
                sid: '18110400'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648227904/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/PTD_jygwwy.jpg',
                title: 'Phan Thành Đạt',
                sid: '18133006'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648227904/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/VHKD_jajpsr.jpg',
                title: 'Võ Hoàng Khả Diệu',
                sid: '19133014'
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648227906/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/NHMT_ozsuq0.jpg',
                title: 'Nguyễn Huỳnh Minh Tiến',
                sid: '18110377'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648227905/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/NTT_bqcu1x.jpg',
                title: 'Nguyễn Trung Tín',
                sid: '18110381'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648227904/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/DTL_nuajg4.jpg',
                title: 'Diệp Tấn Luân',
                sid: '19110055'
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648227904/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/HHH_fyuegh.jpg',
                title: 'Hồ Huy Hoàng',
                sid: '18110284'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648227904/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/NDS_wbprc4.jpg',
                title: 'Nguyễn Đức Sáng',
                sid: '19110448'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648227905/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/NTP_aiase9.jpg',
                title: 'Nguyễn Trần Phúc',
                sid: '18110339'
            },
        ],
    ]

    const awards_SV5T_2020_2021 = [
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648233298/2021-2022/Tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T%20-%20IT%20Show/34._HU%E1%BB%B2NH_TH%E1%BB%8A_THU%C3%9D_VY_-_18110400_jvlkec.jpg',
                title: 'Huỳnh Thị Thúy Vy',
                sid: '18110400'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648233298/2021-2022/Tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T%20-%20IT%20Show/30._B%C3%99I_QU%E1%BB%90C_T%C4%A8NH_-_20110737_bdfvhs.jpg',
                title: 'Bùi Quốc Tĩnh',
                sid: '19110737'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648233297/2021-2022/Tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T%20-%20IT%20Show/21._L%C3%8A_TH%E1%BB%8A_MINH_NGUY%E1%BB%86T_-_19110413_nlbmpj.jpg',
                title: 'Lê Thị Minh Nguyệt',
                sid: '19110413'
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648233297/2021-2022/Tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T%20-%20IT%20Show/28._NGUY%E1%BB%84N_HU%E1%BB%B2NH_MINH_TI%E1%BA%BEN_-_18110377_ngt0wq.jpg',
                title: 'Nguyễn Huỳnh Minh Tiến',
                sid: '18110377'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648233298/2021-2022/Tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T%20-%20IT%20Show/29._NGUY%E1%BB%84N_TRUNG_T%C3%8DN_-_18110381_kiyuii.jpg',
                title: 'Nguyễn Trung Tín',
                sid: '18110381'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648233297/2021-2022/Tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T%20-%20IT%20Show/19._DI%E1%BB%86P_T%E1%BA%A4N_LU%C3%82N_-_19110055_v8p8yp.jpg',
                title: 'Diệp Tấn Luân',
                sid: '19110055'
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648233297/2021-2022/Tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T%20-%20IT%20Show/4._L%C3%8A_V%C4%82N_C%C6%AF%E1%BB%9CNG_-_19110332_h6zu3m.jpg',
                title: 'Lê Văn Cường',
                sid: '19110332'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648233297/2021-2022/Tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T%20-%20IT%20Show/2._L%C3%8A_NGUY%E1%BB%84N_GIA_B%E1%BA%A2O_-_18110251_elt34e.jpg',
                title: 'Lê Nguyễn Gia Bảo',
                sid: '1911018110251448'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648233297/2021-2022/Tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T%20-%20IT%20Show/27._TR%E1%BA%A6N_L%C3%8A_MINH_TI%E1%BA%BEN_-_20110736_pimkng.jpg',
                title: 'Trần Lê Minh Tiến',
                sid: '18110339'
            },
        ],
    ]

    const awards_SV5T_2021_2022 = [
        [ 
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1682447012/NMT_2122_gxj0br.png',
                title: 'Nguyễn Mai Tiên',
                sid: '20110255'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1682447012/LVXA_2122_gce4ab.png',
                title: 'Lê Vũ Xuân An',
                sid: '21110364'
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1682447011/LTMN_2122_rdvuwz.png',
                title: 'Lê Thị Minh Nguyệt',
                sid: '19110413'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1682447016/DTL_2122_urvret.png',
                title: 'Diệp Tấn Luân',
                sid: '19110055'
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1682446863/LDK_2122_xsarqq.png',
                title: 'Lê Duy Khiêm',
                sid: '20110661'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1682447014/TNTT_2122_zoymse.png',
                title: 'Trương Nguyễn Thùy Trang',
                sid: '21110691'
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1682447106/NHMT_2122_xmdwhq.png',
                title: 'Nguyễn Huỳnh Minh Tiến',
                sid: '18110377'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1682447013/VTMN_2122_mfotuq.png',
                title: 'Văn Thị Mười Ngọc',
                sid: '21110561'
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1682447016/LHD_2122_soe3yz.png',
                title: 'Lê Hải Đăng',
                sid: '2110561'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1682448229/PTPN_2122_wmocqn.png',
                title: 'Phạm Thị Phương Nghi',
                sid: '21110556'
            },
        ],
    ]

    const homeSliders_DVUT = [
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648236493/2021-2022/%C4%90o%C3%A0n%20vi%C3%AAn%20%C6%B0u%20t%C3%BA/DVUT_2021_tgjadj.jpg',
            title: 'Đoàn viên ưu tú 2021 - 2022',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]

    const DVUT_2021_2022 = [
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648236450/2021-2022/%C4%90o%C3%A0n%20vi%C3%AAn%20%C6%B0u%20t%C3%BA/DVUT_tcf2ls.jpg',
            title: 'Đoàn viên ưu tú 2020-2021',
            content:
                '✍️Sinh viên 5 Tốt là danh hiệu cao quý của sinh viên Việt Nam đã được đưa vào hệ thống khen thưởng cấp Quốc gia và ngày càng trở thành danh hiệu có uy tín, là minh chứng cho sự cố gắng, nỗ lực không chỉ của mỗi cá nhân sinh viên mà còn là sự phấn đấu của tập thể Liên Chi hội...',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648236493/2021-2022/%C4%90o%C3%A0n%20vi%C3%AAn%20%C6%B0u%20t%C3%BA/DVUT_2021_tgjadj.jpg',
            title: 'Đoàn viên ưu tú 2020-2021',
            content:
                '✍️Sinh viên 5 Tốt là danh hiệu cao quý của sinh viên Việt Nam đã được đưa vào hệ thống khen thưởng cấp Quốc gia và ngày càng trở thành danh hiệu có uy tín, là minh chứng cho sự cố gắng, nỗ lực không chỉ của mỗi cá nhân sinh viên mà còn là sự phấn đấu của tập thể Liên Chi hội...',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648236590/2021-2022/%C4%90o%C3%A0n%20vi%C3%AAn%20%C6%B0u%20t%C3%BA/DVUT___jsrwz3.jpg',
            title: 'Đoàn viên ưu tú 2020-2021',
            content:
                '✍️Sinh viên 5 Tốt là danh hiệu cao quý của sinh viên Việt Nam đã được đưa vào hệ thống khen thưởng cấp Quốc gia và ngày càng trở thành danh hiệu có uy tín, là minh chứng cho sự cố gắng, nỗ lực không chỉ của mỗi cá nhân sinh viên mà còn là sự phấn đấu của tập thể Liên Chi hội...',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648236634/2021-2022/%C4%90o%C3%A0n%20vi%C3%AAn%20%C6%B0u%20t%C3%BA/DVUT_2_ehhhz6.jpg',
            title: 'Đoàn viên ưu tú 2020-2021',
            content:
                '✍️Sinh viên 5 Tốt là danh hiệu cao quý của sinh viên Việt Nam đã được đưa vào hệ thống khen thưởng cấp Quốc gia và ngày càng trở thành danh hiệu có uy tín, là minh chứng cho sự cố gắng, nỗ lực không chỉ của mỗi cá nhân sinh viên mà còn là sự phấn đấu của tập thể Liên Chi hội...',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648236537/2021-2022/%C4%90o%C3%A0n%20vi%C3%AAn%20%C6%B0u%20t%C3%BA/KD_DVUT_kwgs5z.jpg',
            title: 'Đoàn viên ưu tú 2020-2021',
            content:
                '✍️Sinh viên 5 Tốt là danh hiệu cao quý của sinh viên Việt Nam đã được đưa vào hệ thống khen thưởng cấp Quốc gia và ngày càng trở thành danh hiệu có uy tín, là minh chứng cho sự cố gắng, nỗ lực không chỉ của mỗi cá nhân sinh viên mà còn là sự phấn đấu của tập thể Liên Chi hội...',
        },
    ]

    const homeSliders_TNTT = [
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648228476/2021-2022/ICPC%202021/Anh_ICPC-2021_zbpafy.jpg',
            title: 'ICPC 2021',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648147033/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/Tuyen_duong_SV5T_oepslz.jpg',
            title: 'SV5T',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]

    const TNTT_2020_2021 = [
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648232711/2020-2021/Thanh%20ni%C3%AAn%20ti%C3%AAn%20ti%E1%BA%BFn%20l%C3%A0m%20theo%20l%E1%BB%9Di%20B%C3%A1c/TNTT_l1h7zh.jpg',
            title: 'CÔNG NHẬN DANH HIỆU THANH NIÊN TIÊN TIẾN LÀM THEO LỜI BÁC NĂM HỌC 2020 - 2021',
            content:
                '🎉Mỗi lĩnh vực đều có những cá nhân tiêu biểu với những thành tích vượt bậc là niềm tự hào và tấm gương cho các bạn sinh viên nôi theo. Hy vọng các bạn sẽ phấn đấu hơn nữa không những duy trì mà ngày càng phát triển đạt nhiều thành tích ở nhiều lĩnh vực khác nhau....',
        }
    ]

    const awards_TNTT_2020_2021 = [
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648232076/2020-2021/Thanh%20ni%C3%AAn%20ti%C3%AAn%20ti%E1%BA%BFn%20l%C3%A0m%20theo%20l%E1%BB%9Di%20B%C3%A1c/DTL_fwvjer.png',
                title: 'Diệp Tấn Luân',
                sid: '19110055'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648232075/2020-2021/Thanh%20ni%C3%AAn%20ti%C3%AAn%20ti%E1%BA%BFn%20l%C3%A0m%20theo%20l%E1%BB%9Di%20B%C3%A1c/TTMH_hsm61t.png',
                title: 'Trần Thị Mỹ Huyền',
                sid: '19133006'
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648232075/2020-2021/Thanh%20ni%C3%AAn%20ti%C3%AAn%20ti%E1%BA%BFn%20l%C3%A0m%20theo%20l%E1%BB%9Di%20B%C3%A1c/NHMT_fcvrhh.png',
                title: 'Nguyễn Huỳnh Minh Tiến',
                sid: '18110377'
            },
        ],
    ]

    const homeSliders_SongIT = [
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235678/2021-2022/S%C3%B3ng%20IT/SongIT_kcxuts.jpg',
            title: 'Sóng IT 2021',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]

    const SongIT_2021_2022 = [
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235293/2021-2022/S%C3%B3ng%20IT/BG_CH%C3%8DNH_S%C3%93NG_IT_4x_gko1ry.jpg',
            title: 'SÓNG IT - TUYÊN DƯƠNG GƯƠNG ĐIỂN HÌNH TUỔI TRẺ CÔNG NGHỆ THÔNG TIN 2021',
            content:
                '🎉 Nhằm vinh danh các cá nhân, tập thể có nhiều đóng góp trong các lĩnh vực, hoạt động, Đoàn - Hội Khoa Công nghệ thông tin xin tổ chức chương trình "SÓNG IT - Tuyên dương Gương điển hình tuổi trẻ Công nghệ Thông tin 2021"...',
        }
    ]

    const awards_SongIT_2021_2022 = [
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235050/2021-2022/S%C3%B3ng%20IT/NTP_mvo68t.jpg',
                title: 'Nguyễn Trần Phúc',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235049/2021-2022/S%C3%B3ng%20IT/PTD_sgjwva.jpg',
                title: 'Phan Thành Đạt',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235048/2021-2022/S%C3%B3ng%20IT/PNTT_qboqiv.jpg',
                title: 'Phan Nguyễn Thanh Trúc',
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235048/2021-2022/S%C3%B3ng%20IT/NHMT_svu3tr.jpg',
                title: 'Nguyễn Huỳnh Minh Tiến',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235048/2021-2022/S%C3%B3ng%20IT/NTT_doqgt4.jpg',
                title: 'Nguyễn Trung Tín',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235048/2021-2022/S%C3%B3ng%20IT/NQB_pe3d0b.jpg',
                title: 'Nguyễn Quốc Bảo',
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235048/2021-2022/S%C3%B3ng%20IT/NDS_o963jv.jpg',
                title: 'Nguyễn Đức Sáng',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235048/2021-2022/S%C3%B3ng%20IT/NNT_irqymo.jpg',
                title: 'Nguyễn Như Tú',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235047/2021-2022/S%C3%B3ng%20IT/LTMN_tjxgkc.jpg',
                title: 'Lê Thị Minh Nguyệt',
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235047/2021-2022/S%C3%B3ng%20IT/HTTV_seq6cp.jpg',
                title: 'Huỳnh Thị Thúy Vy',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235047/2021-2022/S%C3%B3ng%20IT/BAD_wkbghq.jpg',
                title: 'Bùi Anh Đức',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235047/2021-2022/S%C3%B3ng%20IT/HHH_wvdy0i.jpg',
                title: 'Hồ Huy Hoàng',
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235047/2021-2022/S%C3%B3ng%20IT/DTL_cjeum6.jpg',
                title: 'Diệp Tấn Luân',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235047/2021-2022/S%C3%B3ng%20IT/DVT_ep9ycb.jpg',
                title: 'Đào Văn Thắng',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235046/2021-2022/S%C3%B3ng%20IT/DBT_mevfis.jpg',
                title: 'Diệp Bảo Tùng',
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235046/2021-2022/S%C3%B3ng%20IT/TNMT_wxerbh.jpg',
                title: 'Trần Ngọc Minh Thiện',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235046/2021-2022/S%C3%B3ng%20IT/VHKD_eayevu.jpg',
                title: 'Võ Hoàng Khả Diệu',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648235046/2021-2022/S%C3%B3ng%20IT/TTLX_zoz98o.jpg',
                title: 'Trần Thị Lệ Xuân',
            },
        ],
    ]

    return (
        <>
            {/* SINH VIÊN 5 TỐT */}
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>VINH DANH</h1>
                        <h2>
                            SINH VIÊN ĐẠT THÀNH TÍCH CAO CÁC LĨNH VỰC <br />
                            KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH
                        </h2>
                    </div>
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {homeSliders_SV5T.map((item, index) => (
                                    <MDBCarouselItem
                                        className={clsx(styles.bannerItem, {
                                            active: index === 0,
                                        })}
                                        key={index}
                                    >
                                        <MDBCarouselElement
                                            src={item.imgUrl}
                                            alt={item.title}
                                        />
                                        <MDBCarouselCaption>
                                            <h5>{item.title}</h5>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                ))}
                            </MDBCarouselInner>
                        </MDBCarousel>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles['bottom-left']}></div>
                        <div className={styles['bottom-right']}>SINH VIÊN 5 TỐT</div>
                    </div>
                </div>

                {/* 2021 - 2022 */}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="2021 - 2022" />

                    {SV5T_2021_2022.map((item, index) => (
                        <MDBCard key={index} className={styles.news__card}>
                            <MDBRow className="g-0">
                                <MDBCol md="4">
                                    <MDBCardImage
                                        src={item.imgUrl}
                                        alt="..."
                                        fluid
                                        className={styles['news__card-image']}
                                    />
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody
                                        className={styles['news__card-body']}
                                    >
                                        <MDBCardTitle>{item.title}</MDBCardTitle>
                                        <MDBCardText>{item.content}</MDBCardText>
                                        <MDBCardText>
                                            <small className="text-muted">
                                                Last updated 4 days ago
                                            </small>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    ))}
                </div>
                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel
                        showIndicators
                        showControls
                        className={styles.currEvent__body}
                    >
                        <MDBCarouselInner>
                            {awards_SV5T_2021_2022.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx({
                                        active: index === 0,
                                    })}
                                >
                                    <div className={styles['card-group']}>
                                        {item.map((student, i) => (
                                            <MDBCard
                                                key={i}
                                                className={
                                                    styles['card-group__item']
                                                }
                                            >
                                                <MDBCardImage
                                                    src={student.imgUrl}
                                                    position="top"
                                                    alt="..."
                                                />
                                                <MDBCardBody>
                                                    {/* <MDBCardTitle>{student.title}</MDBCardTitle> */}
                                                    <a href="https://fb.com/DoanHoiITUTE">Chi tiết</a>
                                                    {/* <MDBCardText>{student.sid}</MDBCardText> */}
                                                    {/* <MDBBtn href="#">Chi tiết</MDBBtn> */}
                                                </MDBCardBody>
                                            </MDBCard>
                                        ))}
                                    </div>
                                </MDBCarouselItem>
                            ))}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>

                {/* 2020 - 2021 */}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="2020 - 2021" />

                    {SV5T_2020_2021.map((item, index) => (
                        <MDBCard key={index} className={styles.news__card}>
                            <MDBRow className="g-0">
                                <MDBCol md="4">
                                    <MDBCardImage
                                        src={item.imgUrl}
                                        alt="..."
                                        fluid
                                        className={styles['news__card-image']}
                                    />
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody
                                        className={styles['news__card-body']}
                                    >
                                        <MDBCardTitle>{item.title}</MDBCardTitle>
                                        <MDBCardText>{item.content}</MDBCardText>
                                        <MDBCardText>
                                            <small className="text-muted">
                                                Last updated 4 days ago
                                            </small>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    ))}
                </div>
                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel
                        showIndicators
                        showControls
                        className={styles.currEvent__body}
                    >
                        <MDBCarouselInner>
                            {awards_SV5T_2020_2021.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx({
                                        active: index === 0,
                                    })}
                                >
                                    <div className={styles['card-group']}>
                                        {item.map((student, i) => (
                                            <MDBCard
                                                key={i}
                                                className={
                                                    styles['card-group__item']
                                                }
                                            >
                                                <MDBCardImage
                                                    src={student.imgUrl}
                                                    position="top"
                                                    alt="..."
                                                />
                                                <MDBCardBody>
                                                    {/* <MDBCardTitle>{student.title}</MDBCardTitle> */}
                                                    <a href="https://fb.com/DoanHoiITUTE">Chi tiết</a>
                                                    {/* <MDBCardText>{student.sid}</MDBCardText> */}
                                                    {/* <MDBBtn href="#">Chi tiết</MDBBtn> */}
                                                </MDBCardBody>
                                            </MDBCard>
                                        ))}
                                    </div>
                                </MDBCarouselItem>
                            ))}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>

                {/* 2019 - 2020 */}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="2019 - 2020" />

                    {SV5T_2019_2020.map((item, index) => (
                        <MDBCard key={index} className={styles.news__card}>
                            <MDBRow className="g-0">
                                <MDBCol md="4">
                                    <MDBCardImage
                                        src={item.imgUrl}
                                        alt="..."
                                        fluid
                                        className={styles['news__card-image']}
                                    />
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody
                                        className={styles['news__card-body']}
                                    >
                                        <MDBCardTitle>{item.title}</MDBCardTitle>
                                        <MDBCardText>{item.content}</MDBCardText>
                                        <MDBCardText>
                                            <small className="text-muted">
                                                Last updated 5 days ago
                                            </small>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    ))}
                </div>
                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel
                        showIndicators
                        showControls
                        className={styles.currEvent__body}
                    >
                        <MDBCarouselInner>
                            {awards_SV5T_2019_2020.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx({
                                        active: index === 0,
                                    })}
                                >
                                    <div className={styles['card-group']}>
                                        {item.map((student, i) => (
                                            <MDBCard
                                                key={i}
                                                className={
                                                    styles['card-group__item']
                                                }
                                            >
                                                <MDBCardImage
                                                    src={student.imgUrl}
                                                    position="top"
                                                    alt="..."
                                                />
                                                <MDBCardBody>
                                                    {/* <MDBCardTitle>{student.title}</MDBCardTitle> */}
                                                    <a href="https://fb.com/DoanHoiITUTE">Chi tiết</a>
                                                    {/* <MDBCardText>{student.sid}</MDBCardText> */}
                                                    {/* <MDBBtn href="#">Chi tiết</MDBBtn> */}
                                                </MDBCardBody>
                                            </MDBCard>
                                        ))}
                                    </div>
                                </MDBCarouselItem>
                            ))}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
            </MDBContainer>

            {/* ĐOÀN VIÊN ƯU TÚ */}
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>VINH DANH</h1>
                        <h2>
                            SINH VIÊN ĐẠT THÀNH TÍCH CAO CÁC LĨNH VỰC <br />
                            KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH
                        </h2>
                    </div>
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {homeSliders_DVUT.map((item, index) => (
                                    <MDBCarouselItem
                                        className={clsx(styles.bannerItem, {
                                            active: index === 0,
                                        })}
                                        key={index}
                                    >
                                        <MDBCarouselElement
                                            src={item.imgUrl}
                                            alt={item.title}
                                        />
                                        <MDBCarouselCaption>
                                            <h5>{item.title}</h5>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                ))}
                            </MDBCarouselInner>
                        </MDBCarousel>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles['bottom-left']}></div>
                        <div className={styles['bottom-right']}>ĐOÀN VIÊN ƯU TÚ</div>
                    </div>
                </div>
                {/* 2021 - 2022 */}
                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.currEvent,
                        styles.bluebg,
                    )}
                >
                    <SessionHeader title="2021 - 2022" />
                    <MDBCarousel showControls className={styles.currEvent__body}>
                        <MDBCarouselInner>
                            {DVUT_2021_2022.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx({
                                        active: index === 0,
                                    })}
                                >
                                    <MDBCarouselElement
                                        className={styles['currEvent__body-img']}
                                        src={item.imgUrl}
                                        alt={item.title}
                                    />
                                    <MDBCarouselCaption>
                                        <span
                                            className={
                                                styles['currEvent__body-caption']
                                            }
                                        >
                                            {item.title}
                                        </span>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                            ))}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
            </MDBContainer>

            {/* THANH NIÊN TIÊN TIẾN LÀM THEO LỜI BÁC */}
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>VINH DANH</h1>
                        <h2>
                            SINH VIÊN ĐẠT THÀNH TÍCH CAO CÁC LĨNH VỰC <br />
                            KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH
                        </h2>
                    </div>
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {homeSliders_TNTT.map((item, index) => (
                                    <MDBCarouselItem
                                        className={clsx(styles.bannerItem, {
                                            active: index === 0,
                                        })}
                                        key={index}
                                    >
                                        <MDBCarouselElement
                                            src={item.imgUrl}
                                            alt={item.title}
                                        />
                                        <MDBCarouselCaption>
                                            <h5>{item.title}</h5>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                ))}
                            </MDBCarouselInner>
                        </MDBCarousel>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles['bottom-left']}></div>
                        <div className={styles['bottom-right']}>THANH NIÊN TIÊN TIẾN LÀM THEO LỜI BÁC</div>
                    </div>
                </div>
                {/* 2020 - 2021 */}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="2020 - 2021" />

                    {TNTT_2020_2021.map((item, index) => (
                        <MDBCard key={index} className={styles.news__card}>
                            <MDBRow className="g-0">
                                <MDBCol md="4">
                                    <MDBCardImage
                                        src={item.imgUrl}
                                        alt="..."
                                        fluid
                                        className={styles['news__card-image']}
                                    />
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody
                                        className={styles['news__card-body']}
                                    >
                                        <MDBCardTitle>{item.title}</MDBCardTitle>
                                        <MDBCardText>{item.content}</MDBCardText>
                                        <MDBCardText>
                                            <small className="text-muted">
                                                Last updated 8 days ago
                                            </small>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    ))}
                </div>
                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel
                        showIndicators
                        showControls
                        className={styles.currEvent__body}
                    >
                        <MDBCarouselInner>
                            {awards_TNTT_2020_2021.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx({
                                        active: index === 0,
                                    })}
                                >
                                    <div className={styles['card-group']}>
                                        {item.map((student, i) => (
                                            <MDBCard
                                                key={i}
                                                className={
                                                    styles['card-group__item']
                                                }
                                            >
                                                <MDBCardImage
                                                    src={student.imgUrl}
                                                    position="top"
                                                    alt="..."
                                                />
                                                <MDBCardBody>
                                                    {/* <MDBCardTitle>{student.title}</MDBCardTitle> */}
                                                    <a href="https://fb.com/DoanHoiITUTE">Chi tiết</a>
                                                    {/* <MDBCardText>{student.sid}</MDBCardText> */}
                                                    {/* <MDBBtn href="#">Chi tiết</MDBBtn> */}
                                                </MDBCardBody>
                                            </MDBCard>
                                        ))}
                                    </div>
                                </MDBCarouselItem>
                            ))}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
            </MDBContainer>

            {/* SÓNG IT - GƯƠNG ĐIỂN HÌNH TUỔI TRẺ CÔNG NGHỆ THÔNG TIN */}
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>VINH DANH</h1>
                        <h2>
                            SINH VIÊN ĐẠT THÀNH TÍCH CAO CÁC LĨNH VỰC <br />
                            KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH
                        </h2>
                    </div>
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {homeSliders_SongIT.map((item, index) => (
                                    <MDBCarouselItem
                                        className={clsx(styles.bannerItem, {
                                            active: index === 0,
                                        })}
                                        key={index}
                                    >
                                        <MDBCarouselElement
                                            src={item.imgUrl}
                                            alt={item.title}
                                        />
                                        <MDBCarouselCaption>
                                            <h5>{item.title}</h5>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                ))}
                            </MDBCarouselInner>
                        </MDBCarousel>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles['bottom-left']}></div>
                        <div className={styles['bottom-right']}>SÓNG IT - GƯƠNG ĐIỂN HÌNH TUỔI TRẺ CÔNG NGHỆ THÔNG TIN</div>
                    </div>
                </div>
                {/* 2020 - 2021 */}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="2021 - 2022" />

                    {SongIT_2021_2022.map((item, index) => (
                        <MDBCard key={index} className={styles.news__card}>
                            <MDBRow className="g-0">
                                <MDBCol md="4">
                                    <MDBCardImage
                                        src={item.imgUrl}
                                        alt="..."
                                        fluid
                                        className={styles['news__card-image']}
                                    />
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody
                                        className={styles['news__card-body']}
                                    >
                                        <MDBCardTitle>{item.title}</MDBCardTitle>
                                        <MDBCardText>{item.content}</MDBCardText>
                                        <MDBCardText>
                                            <small className="text-muted">
                                                Last updated 8 days ago
                                            </small>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    ))}
                </div>
                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel
                        showIndicators
                        showControls
                        className={styles.currEvent__body}
                    >
                        <MDBCarouselInner>
                            {awards_SongIT_2021_2022.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx({
                                        active: index === 0,
                                    })}
                                >
                                    <div className={styles['card-group']}>
                                        {item.map((student, i) => (
                                            <MDBCard
                                                key={i}
                                                className={
                                                    styles['card-group__item']
                                                }
                                            >
                                                <MDBCardImage
                                                    src={student.imgUrl}
                                                    position="top"
                                                    alt="..."
                                                />
                                                <MDBCardBody>
                                                    {/* <MDBCardTitle>{student.title}</MDBCardTitle> */}
                                                    <a href="https://fb.com/DoanHoiITUTE">Chi tiết</a>
                                                    {/* <MDBCardText>{student.sid}</MDBCardText> */}
                                                    {/* <MDBBtn href="#">Chi tiết</MDBBtn> */}
                                                </MDBCardBody>
                                            </MDBCard>
                                        ))}
                                    </div>
                                </MDBCarouselItem>
                            ))}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
            </MDBContainer>
        </>
    )
}


export const GG_SHEET_URL = "https://docs.google.com/spreadsheets/d/15OgjKPQIg8_hSGISfdgvtSyome2zxQkVpbGPcm5IGpI/gviz/tq?tqx=out:json"

export function combineArrays(first, second) {
    return first.reduce((acc, val, ind) => {
      acc[val] = second[ind];
      return acc;
    }, {});
  };

export function getGoogleSheetData(url) {
    return fetch(url)
      .then(r => r.text())
      .then(data => {
        const r = data.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/);
        if (r && r.length === 2) {
          const obj = JSON.parse(r[1]);
          const table = obj.table;
          const header = table.cols.map(({ label } ) => label);
          const rows = table.rows.map(({ c } ) => c.map((e) => e ? (e.v || "") : "")); // Modified from const rows = table.rows.map(({c}) => c.map(({v}) => v));
          var result = rows.map((row ) => {
            var student = combineArrays(header, row);
            return student;
          });

          return result;
        }
      })
  }