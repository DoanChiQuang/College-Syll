import React from 'react';
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFViewer,
    Font,
    Image,
} from '@react-pdf/renderer';

import AVATAR from '../public/avatar.jpg';

Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: './public/fonts/Roboto-Regular.ttf',
            fontWeight: 'normal',
        },
        {
            src: './public/fonts/Roboto-Bold.ttf',
            fontWeight: 'bold',
        },
        {
            src: './public/fonts/Roboto-Italic.ttf',
            fontWeight: 'italic',
        },
        {
            src: './public/fonts/Roboto-medium.ttf',
            fontWeight: 'medium',
        },
    ],
});

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 50,
        paddingVertical: 50,
    },

    section: {
        width: '100%',
    },

    body: {
        height: '100%',
    },

    title: {
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },

    sentence: {
        flexDirection: 'row',
        marginBottom: 16,
    },

    question: {
        fontSize: 11,
        fontWeight: 'medium',
    },

    answer: {
        flex: 1,
        textAlign: 'center',
        fontSize: 11,
        borderBottomWidth: 1,
        borderStyle: 'dotted',
    },

    table: {
        borderWidth: 1,
        padding: 1,
        marginBottom: 16,
    },

    tableRow: {
        flexDirection: 'row',
    },

    tableTh: {
        flex: 1,
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 4,
        margin: 1,
        borderWidth: 1,
    },

    tableTr: {
        flex: 1,
        fontSize: 11,
        textAlign: 'center',
        padding: 4,
        margin: 1,
        borderWidth: 1,
    },
});

const MyDocument = () => (
    <PDFViewer className="w-screen h-screen">
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>SƠ YẾU LÝ LỊCH</Text>
                    <View style={styles.body}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={AVATAR} style={{width: 80, height: 100, marginRight: 4, marginBottom: 4}} />
                            <View style={{flex: 1}}>
                                <View style={styles.sentence}>
                                    <Text style={styles.question}>
                                        1. Họ và tên khai sinh:
                                    </Text>
                                    <Text style={styles.answer}>Đoàn Chí Quang</Text>
                                </View>
                                <View style={styles.sentence}>
                                    <Text style={styles.question}>
                                        2. Tên gọi khác:
                                    </Text>
                                    <Text style={styles.answer}>Kuang</Text>
                                </View>
                                <View style={styles.sentence}>
                                    <Text style={styles.question}>3. Sinh ngày:</Text>
                                    <Text style={styles.answer}>12/07/2001</Text>
                                </View>
                                <View style={styles.sentence}>
                                    <Text style={styles.question}>
                                        4. Nơi sinh: Phường/Xã:
                                    </Text>
                                    <Text style={styles.answer}>Nhơn Đức</Text>
                                    <Text style={styles.question}>Quận/Huyện:</Text>
                                    <Text style={styles.answer}>Nhà Bè</Text>
                                    <Text style={styles.question}>TP/Tỉnh:</Text>
                                    <Text style={styles.answer}>Hồ Chí Minh</Text>
                                </View>
                                <View style={styles.sentence}>
                                    <Text style={styles.question}>
                                        5. Quê quán: Phường/Xã:
                                    </Text>
                                    <Text style={styles.answer}>Nhơn Đức</Text>
                                    <Text style={styles.question}>Quận/Huyện:</Text>
                                    <Text style={styles.answer}>Nhà Bè</Text>
                                    <Text style={styles.question}>TP/Tỉnh:</Text>
                                    <Text style={styles.answer}>Hồ Chí Minh</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>6. Dân tộc:</Text>
                            <Text style={styles.answer}>Hoa</Text>
                            <Text style={styles.question}>7. Tôn giáo:</Text>
                            <Text style={styles.answer}>Không</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                8. Nơi đăng ký hộ khẩu thường trú:
                            </Text>
                            <Text style={styles.answer}>
                                22 Ấp 4, Nhơn Đức, Nhà Bè, Hồ Chí Minh
                            </Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                9. Nơi ở hiện nay:
                            </Text>
                            <Text style={styles.answer}>
                                22 Ấp 4, Nhơn Đức, Nhà Bè, Hồ Chí Minh
                            </Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                10. Nghề nghiệp khi được tuyển dụng:
                            </Text>
                            <Text style={styles.answer}>IT</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                11. Ngày tuyển dụng:
                            </Text>
                            <Text style={styles.answer}>12/07/2024</Text>
                            <Text style={styles.question}>
                                Cơ quan tuyển dụng:
                            </Text>
                            <Text style={styles.answer}>Đại học Sài Gòn</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                12. Chức vụ (Chức danh) hiện tại:
                            </Text>
                            <Text style={styles.answer}>Developer</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                13. Công việc chính được giao:
                            </Text>
                            <Text style={styles.answer}>Developer</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                14. Gạch công chức (viên chức):
                            </Text>
                            <Text style={styles.answer}>ABC123</Text>
                            <Text style={styles.question}>Mã gạch:</Text>
                            <Text style={styles.answer}>ABC123</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>Bậc lương:</Text>
                            <Text style={styles.answer}>1.1</Text>
                            <Text style={styles.question}>Hệ số:</Text>
                            <Text style={styles.answer}>1</Text>
                            <Text style={styles.question}>Ngày hưởng:</Text>
                            <Text style={styles.answer}>10</Text>
                            <Text style={styles.question}>
                                Phụ cấp chức vụ:
                            </Text>
                            <Text style={styles.answer}>10</Text>
                            <Text style={styles.question}>Phụ cấp khác:</Text>
                            <Text style={styles.answer}>10</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                15.1. Trình độ giáo dục phổ thông:
                            </Text>
                            <Text style={styles.answer}>12/12</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                15.2. Trình độ chuyên môn cao nhất:
                            </Text>
                            <Text style={styles.answer}>Kỹ sư</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                15.3. Lý luận chính trị:
                            </Text>
                            <Text style={styles.answer}>1.1</Text>
                            <Text style={styles.question}>
                                15.4. Quản lý nhà nước:
                            </Text>
                            <Text style={styles.answer}>1</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                15.5. Ngoại ngữ:
                            </Text>
                            <Text style={styles.answer}>1.1</Text>
                            <Text style={styles.question}>15.6. Tin học:</Text>
                            <Text style={styles.answer}>1</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                16. Ngày vào Đảng Cộng sản Việt Nam:
                            </Text>
                            <Text style={styles.answer}>12/07/2001</Text>
                            <Text style={styles.question}>
                                Ngày chính thức:
                            </Text>
                            <Text style={styles.answer}>12/07/2001</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                17. Ngày tham gia tổ chức chính trị - xã hội:
                            </Text>
                            <Text style={styles.answer}>12/07/2001</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                18. Ngày nhập ngũ:
                            </Text>
                            <Text style={styles.answer}>12/07/2001</Text>
                            <Text style={styles.question}>Ngày xuất ngũ:</Text>
                            <Text style={styles.answer}>12/07/2001</Text>
                            <Text style={styles.question}>
                                Quân hàm cao nhất:
                            </Text>
                            <Text style={styles.answer}>Thượng Úy</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                19. Danh hiệu được phong tặng cao nhất:
                            </Text>
                            <Text style={styles.answer}>12/07/2001</Text>
                        </View>
                    </View>
                </View>
            </Page>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <View style={styles.body}>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                20. Sở trường công tác:
                            </Text>
                            <Text style={styles.answer}>12/07/2001</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                21. Khen thưởng:
                            </Text>
                            <Text style={styles.answer}>12/07/2001</Text>
                            <Text style={styles.question}>22. Kỷ luật:</Text>
                            <Text style={styles.answer}>12/07/2001</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                23. Tình trạng sức khỏe:
                            </Text>
                            <Text style={styles.answer}>BTH</Text>
                            <Text style={styles.question}>Chiều cao:</Text>
                            <Text style={styles.answer}>165</Text>
                            <Text style={styles.question}>Cân nặng:</Text>
                            <Text style={styles.answer}>70</Text>
                            <Text style={styles.question}>Nhóm máu:</Text>
                            <Text style={styles.answer}>O</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                24. Là thương binh hạng:
                            </Text>
                            <Text style={styles.answer}>BTH</Text>
                            <Text style={styles.question}>
                                Là con gia đình chính sách:
                            </Text>
                            <Text style={styles.answer}>165</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                25. Số chứng minh nhân dân:
                            </Text>
                            <Text style={styles.answer}>BTH</Text>
                            <Text style={styles.question}>Ngày cấp:</Text>
                            <Text style={styles.answer}>165</Text>
                            <Text style={styles.question}>26. Số BHXH:</Text>
                            <Text style={styles.answer}>165</Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                27. Đào tạo, bồi dưỡng, chuyên môn, nghiệp vụ,
                                lý luận chính trị, ngoại ngữ, tin học
                            </Text>
                        </View>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableTh}>Tên trường</Text>
                                <Text style={styles.tableTh}>
                                    Chuyên ngành đào tạo, bồi dư
                                </Text>
                                <Text style={styles.tableTh}>
                                    Từ tháng, năm - đến tháng, năm
                                </Text>
                                <Text style={styles.tableTh}>
                                    Hình thức đào tạo
                                </Text>
                                <Text style={styles.tableTh}>
                                    Văn bằng, chứng chỉ, trình độ gì
                                </Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableTr}>
                                    Đại học Sài Gòn
                                </Text>
                                <Text style={styles.tableTr}>
                                    Lập trình phần mềm
                                </Text>
                                <Text style={styles.tableTr}>
                                    07/2019 - 07/2023
                                </Text>
                                <Text style={styles.tableTr}>Chính quy</Text>
                                <Text style={styles.tableTr}>Kỹ sư</Text>
                            </View>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                28. Tóm tắt quá trình công tác
                            </Text>
                        </View>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableTh}>
                                    Từ tháng, năm - đến tháng, năm
                                </Text>
                                <Text style={styles.tableTh}>
                                    Chức danh, chức vụ, đơn vị công tác (đảng,
                                    chính quyền, đoàn thể, tổ chức xã hội) kể cả
                                    thời gian được đào tạo, bồi dưỡng về chuyên
                                    môn, nghiệp vụ, …
                                </Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableTr}>
                                    Đại học Sài Gòn
                                </Text>
                                <Text style={styles.tableTr}>
                                    Lập trình phần mềm
                                </Text>
                            </View>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                29. Đặc điểm lịch sử bản thân
                            </Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                - Khai rõ: bị bắt, bị tù (từ ngày tháng năm nào
                                đến ngày tháng năm nào, ở đâu?), đã khai báo cho
                                ai, những vấn đề gì? Bản thân có làm việc trong
                                chế độ cũ (cơ quan, đơn vị nào, địa điểm, chức
                                danh, chức vụ, thời gian làm việc…):
                            </Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text
                                style={[styles.answer, { textAlign: 'left' }]}
                            >
                                Không có
                            </Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                - Tham gia hoặc có quan hệ với các tổ chức chính
                                trị, kinh tế, xã hội nào ở nước ngoài (làm gì,
                                tổ chức nào, đặt trụ sở ở đâu ..?):
                            </Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text
                                style={[styles.answer, { textAlign: 'left' }]}
                            >
                                Không có
                            </Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                - Có thân nhân (Cha, Mẹ, Vợ, Chồng, con, anh chị
                                em ruột) ở nước ngoài (làm gì, địa chỉ …)?
                            </Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text
                                style={[styles.answer, { textAlign: 'left' }]}
                            >
                                Không có
                            </Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                30. Quan hệ gia đình
                            </Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                a. Về bản thân: Cha, Mẹ, Vợ (hoặc chồng), các
                                con, anh chị em ruột
                            </Text>
                        </View>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableTh}>Mối quan hệ</Text>
                                <Text style={styles.tableTh}>Họ và tên</Text>
                                <Text style={styles.tableTh}>Năm sinh</Text>
                                <Text style={styles.tableTh}>
                                    Quê quán, nghề nghiệp, chức danh, chức vụ,
                                    đơn vị công tác, học tập, nơi ở (trong,
                                    ngoài nước); thành viên các tổ chức chính
                                    trị - xã hội …?)
                                </Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableTr}>Không</Text>
                                <Text style={styles.tableTr}>Không</Text>
                                <Text style={styles.tableTr}>Không</Text>
                                <Text style={styles.tableTr}>Không</Text>
                            </View>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                b. Về bên vợ (hoặc chồng): Cha, Mẹ, anh chị em
                                ruột
                            </Text>
                        </View>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableTh}>Mối quan hệ</Text>
                                <Text style={styles.tableTh}>Họ và tên</Text>
                                <Text style={styles.tableTh}>Năm sinh</Text>
                                <Text style={styles.tableTh}>
                                    Quê quán, nghề nghiệp, chức danh, chức vụ,
                                    đơn vị công tác, học tập, nơi ở (trong,
                                    ngoài nước); thành viên các tổ chức chính
                                    trị - xã hội …?)
                                </Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableTr}>Không</Text>
                                <Text style={styles.tableTr}>Không</Text>
                                <Text style={styles.tableTr}>Không</Text>
                                <Text style={styles.tableTr}>Không</Text>
                            </View>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                31. Diễn biến quá trình lương của cán bộ, công
                                chức
                            </Text>
                        </View>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableTh}>Tháng/năm</Text>
                                <Text style={styles.tableTr}>01/2024</Text>
                                <Text style={styles.tableTr}>01/2024</Text>
                                <Text style={styles.tableTr}>01/2024</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableTh}>Mã ngạch/bậc</Text>
                                <Text style={styles.tableTr}></Text>
                                <Text style={styles.tableTr}></Text>
                                <Text style={styles.tableTr}></Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableTh}>Hệ số lương</Text>
                                <Text style={styles.tableTr}></Text>
                                <Text style={styles.tableTr}></Text>
                                <Text style={styles.tableTr}></Text>
                            </View>
                        </View>
                        <View style={styles.sentence}>
                            <Text style={styles.question}>
                                32. Nhận xét, đánh giá của cơ quan, đơn vị quản
                                lý và sử dụng cán bộ, công chức
                            </Text>
                        </View>
                        <View style={styles.sentence}>
                            <Text
                                style={[styles.answer, { textAlign: 'left' }]}
                            >
                                Không có
                            </Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 16}}>
                            <Text style={{fontSize: 11, paddingHorizontal: 4, borderBottomWidth: 1, borderStyle: 'dotted'}}>Hồ Chí Minh</Text>
                            <Text style={{fontSize: 11, paddingHorizontal: 4}}>Ngày</Text>
                            <Text style={{fontSize: 11, paddingHorizontal: 4, borderBottomWidth: 1, borderStyle: 'dotted'}}>24</Text>
                            <Text style={{fontSize: 11, paddingHorizontal: 4}}>tháng</Text>
                            <Text style={{fontSize: 11, paddingHorizontal: 4, borderBottomWidth: 1, borderStyle: 'dotted'}}>04</Text>
                            <Text style={{fontSize: 11, paddingHorizontal: 4}}>năm</Text>
                            <Text style={{fontSize: 11, paddingHorizontal: 4, borderBottomWidth: 1, borderStyle: 'dotted'}}>2024</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 11, fontWeight: 'bold', marginBottom: 4}}>Người khai</Text>
                                <Text style={{fontSize: 11, textAlign: 'center', marginBottom: 4}}>Tôi cam đoan những lời khai{'\n'}trên đây là đúng sự thật</Text>
                                <Text style={{fontSize: 11}}>(Ký tên, ghi rõ họ tên)</Text>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 11, fontWeight: 'bold', marginBottom: 4}}>Thủ tướng cơ quan, đơn vị quản lý và sử dụng CBCC</Text>
                                <Text style={{fontSize: 11}}>(Ký tên, đóng dấu)</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default MyDocument;
