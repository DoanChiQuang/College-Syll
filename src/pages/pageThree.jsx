import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import {
    onAddRowTable,
    onChangeTextField,
    onDeleteRowTable,
} from '../context/actions/syllAction';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';
import {
    validateName,
    validateNumber,
    validateValueWithSpecialCharacters,
} from '../utils/validateFunc';

const PageThree = ({ syll, syllDispatch, useHook }) => {
    const { SelectedValue, getSubtractDate } = useHook;

    return (
        <Box className="flex flex-col space-y-4">
            <TextField
                label="(20) Sở trường công tác"
                value={syll.value.workExperience}
                onChange={(e) =>
                    onChangeTextField(
                        'workExperience',
                        e.target.value,
                        validateName
                    )(syllDispatch)
                }
                variant="outlined"
                fullWidth
                required
                error={syll.errorKeys.includes("workExperience")}
                helperText={syll.errorKeys.includes("workExperience") && syll.errorKeysMessage.workExperience}
            />
            <Box className="flex items-center space-x-4">
                <TextField
                    label="(21.1) Khen thưởng"
                    value={syll.value.achievement}
                    onChange={(e) =>
                        onChangeTextField(
                            'achievement',
                            e.target.value,
                            validateName
                        )(syllDispatch)
                    }
                    variant="outlined"
                    fullWidth                    
                    error={syll.errorKeys.includes("achievement")}
                    helperText={syll.errorKeys.includes("achievement") && syll.errorKeysMessage.achievement}
                />
                <DatePicker
                    label="(21.2) Năm khen thưởng"
                    value={syll.value.achievementYear}
                    onChange={(datetime) =>
                        onChangeTextField(
                            'achievementYear',
                            datetime
                        )(syllDispatch)
                    }
                    views={['year']}
                    minDate={getSubtractDate(18)}
                    sx={{ border: 0 }}
                    className="w-full"
                />
            </Box>
            <Box className="flex items-center space-x-4">
                <TextField
                    label="(22.1) Kỷ luật"
                    value={syll.value.punishment}
                    onChange={(e) =>
                        onChangeTextField(
                            'punishment',
                            e.target.value,
                            validateName
                        )(syllDispatch)
                    }
                    variant="outlined"
                    fullWidth                    
                    error={syll.errorKeys.includes("punishment")}
                    helperText={syll.errorKeys.includes("punishment") && syll.errorKeysMessage.punishment}
                />
                <DatePicker
                    label="(22.2) Năm kỷ luật"
                    value={syll.value.punishmentYear}
                    onChange={(datetime) =>
                        onChangeTextField(
                            'punishmentYear',
                            datetime
                        )(syllDispatch)
                    }
                    views={['year']}
                    minDate={getSubtractDate(18)}
                    sx={{ border: 0 }}
                    className="w-full"
                />
            </Box>
            <Box className="flex items-center space-x-4">
                <TextField
                    label="(23.1) Tình trạng sức khỏe"
                    value={syll.value.healthStatus}
                    onChange={(e) =>
                        onChangeTextField(
                            'healthStatus',
                            e.target.value,
                            validateName
                        )(syllDispatch)
                    }
                    variant="outlined"
                    fullWidth
                    required
                    error={syll.errorKeys.includes("healthStatus")}
                    helperText={syll.errorKeys.includes("healthStatus") && syll.errorKeysMessage.healthStatus}
                />
                <TextField
                    label="(23.2) Chiều cao (Cm)"
                    value={syll.value.height}
                    onChange={(e) =>
                        onChangeTextField(
                            'height',
                            e.target.value,
                            validateNumber
                        )(syllDispatch)
                    }
                    variant="outlined"
                    fullWidth
                    required
                    error={syll.errorKeys.includes("height")}
                    helperText={syll.errorKeys.includes("height") && syll.errorKeysMessage.height}
                />
                <TextField
                    label="(23.3) Câng nặng (Kg)"
                    value={syll.value.weight}
                    onChange={(e) =>
                        onChangeTextField(
                            'weight',
                            e.target.value,
                            validateNumber
                        )(syllDispatch)
                    }
                    variant="outlined"
                    fullWidth
                    required
                    error={syll.errorKeys.includes("weight")}
                    helperText={syll.errorKeys.includes("weight") && syll.errorKeysMessage.weight}
                />
                <Autocomplete
                    value={SelectedValue(
                        syll.value.bloodGroup.data,
                        syll.value.bloodGroup.bloodGroupId
                    )}
                    onChange={(e, item) =>
                        onChangeTextField('bloodGroup', {
                            ...syll.value.bloodGroup,
                            bloodGroupId: item ? item.id : null,
                        })(syllDispatch)
                    }
                    disablePortal
                    options={syll.value.bloodGroup.data}
                    fullWidth
                    renderInput={(params) => (
                        <TextField {...params} label="(23.4) Nhóm máu" />
                    )}
                />
            </Box>
            <Box className="flex items-center space-x-4">
                <TextField
                    label="(24.1) Thương binh hạng"
                    value={syll.value.soldierRank}
                    onChange={(e) =>
                        onChangeTextField(
                            'soldierRank',
                            e.target.value,
                            validateValueWithSpecialCharacters
                        )(syllDispatch)
                    }
                    variant="outlined"
                    fullWidth
                    error={syll.errorKeys.includes("soldierRank")}
                    helperText={syll.errorKeys.includes("soldierRank") && syll.errorKeysMessage.soldierRank}
                />
                <TextField
                    label="(24.2) Con gia đình chính sách"
                    value={syll.value.soldierFamily}
                    onChange={(e) =>
                        onChangeTextField(
                            'soldierFamily',
                            e.target.value,
                            validateName
                        )(syllDispatch)
                    }
                    variant="outlined"
                    fullWidth                    
                    error={syll.errorKeys.includes("soldierFamily")}
                    helperText={syll.errorKeys.includes("soldierFamily") && syll.errorKeysMessage.soldierFamily}
                />
            </Box>
            <Box className="flex items-center space-x-4">
                <TextField
                    label="(25.1) Số chứng minh dân dân"
                    value={syll.value.id}
                    onChange={(e) =>
                        onChangeTextField(
                            'id',
                            e.target.value,
                            validateNumber
                        )(syllDispatch)
                    }
                    variant="outlined"
                    fullWidth
                    required
                    error={syll.errorKeys.includes("id")}
                    helperText={syll.errorKeys.includes("id") && syll.errorKeysMessage.id}
                />
                <DatePicker
                    label="(25.2) Ngày cấp"
                    value={syll.value.idDate}
                    onChange={(datetime) =>
                        onChangeTextField('idDate', datetime)(syllDispatch)
                    }
                    format="DD/MM/YYYY"
                    minDate={getSubtractDate(16)}
                    sx={{ border: 0 }}
                    className="w-full"
                    slotProps={{
                        textField: {
                            required: true
                        }
                    }}
                />
                <TextField
                    label="(26) Số BHXH"
                    value={syll.value.socialId}
                    onChange={(e) =>
                        onChangeTextField(
                            'socialId',
                            e.target.value,
                            validateNumber
                        )(syllDispatch)
                    }
                    variant="outlined"
                    fullWidth
                    required
                    error={syll.errorKeys.includes("socialId")}
                    helperText={syll.errorKeys.includes("socialId") && syll.errorKeysMessage.socialId}
                />
            </Box>
            <Box className="flex flex-col justify-center space-y-4">
                <Typography variant="subtitle1">
                    (27) Đào tạo, bồi dưỡng về chuyên môn, nghiệp vụ, lý luận
                    chính trị, ngoại ngữ, tin học:
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Tên trường</TableCell>
                                <TableCell align="center">
                                    Chuyên ngành đào tạo, bồi dưỡng
                                </TableCell>
                                <TableCell align="center">
                                    Từ tháng, năm đến tháng, năm
                                </TableCell>
                                <TableCell align="center">
                                    Hình thức đào tạo
                                </TableCell>
                                <TableCell align="center">
                                    Văn bằng, chứng chỉ, trình độ gì
                                </TableCell>
                                <TableCell align="center">Chức năng</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {syll.value.training.map((row, index) => (
                                <TableRow
                                    key={row}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell
                                        aria-required
                                        contentEditable
                                        align="center"
                                        onBlur={(e) =>
                                            onChangeTextField('training', [
                                                ...syll.value.training.filter(
                                                    (item) => item.id != row.id
                                                ),
                                                {
                                                    ...row,
                                                    schoolname:
                                                        e.target.textContent,
                                                },
                                            ])(syllDispatch)
                                        }
                                    >
                                        {row.schoolname}
                                    </TableCell>
                                    <TableCell
                                        contentEditable
                                        align="center"
                                        onBlur={(e) =>
                                            onChangeTextField('training', [
                                                ...syll.value.training.filter(
                                                    (item) => item.id != row.id
                                                ),
                                                {
                                                    ...row,
                                                    major: e.target.textContent,
                                                },
                                            ])(syllDispatch)
                                        }
                                    >
                                        {row.major}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Box className="flex space-x-2">
                                            <DatePicker
                                                value={row.monthYearFrom}
                                                onChange={(datetime) =>
                                                    onChangeTextField(
                                                        'training',
                                                        [
                                                            ...syll.value.training.filter(
                                                                (item) =>
                                                                    item.id !=
                                                                    row.id
                                                            ),
                                                            {
                                                                ...row,
                                                                monthYearFrom:
                                                                    datetime,
                                                            },
                                                        ]
                                                    )(syllDispatch)
                                                }
                                                label="Từ tháng, năm"
                                                views={['month', 'year']}
                                                sx={{ border: 0 }}
                                            />
                                            <DatePicker
                                                value={row.monthYearTo}
                                                onChange={(datetime) =>
                                                    onChangeTextField(
                                                        'training',
                                                        [
                                                            ...syll.value.training.filter(
                                                                (item) =>
                                                                    item.id !=
                                                                    row.id
                                                            ),
                                                            {
                                                                ...row,
                                                                monthYearTo:
                                                                    datetime,
                                                            },
                                                        ]
                                                    )(syllDispatch)
                                                }
                                                label="Đến tháng, năm"
                                                views={['month', 'year']}
                                                sx={{ border: 0 }}
                                            />
                                        </Box>
                                    </TableCell>
                                    <TableCell
                                        contentEditable
                                        align="center"
                                        onBlur={(e) =>
                                            onChangeTextField('training', [
                                                ...syll.value.training.filter(
                                                    (item) => item.id != row.id
                                                ),
                                                {
                                                    ...row,
                                                    type: e.target.textContent,
                                                },
                                            ])(syllDispatch)
                                        }
                                    >
                                        {row.type}
                                    </TableCell>
                                    <TableCell
                                        contentEditable
                                        align="center"
                                        onBlur={(e) =>
                                            onChangeTextField('training', [
                                                ...syll.value.training.filter(
                                                    (item) => item.id != row.id
                                                ),
                                                {
                                                    ...row,
                                                    certificate:
                                                        e.target.textContent,
                                                },
                                            ])(syllDispatch)
                                        }
                                    >
                                        {row.certificate}
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton
                                            children={<DeleteIcon />}
                                            onClick={() =>
                                                onDeleteRowTable(
                                                    'training',
                                                    row.id
                                                )(syllDispatch)
                                            }
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box className="flex justify-center items-center">
                    <IconButton
                        children={<AddIcon />}
                        onClick={() =>
                            onAddRowTable('training', {
                                id: dayjs().unix(),
                                schoolname: '',
                                major: '',
                                type: '',
                                monthYearFrom: null,
                                monthYearTo: null,
                                certificate: '',
                            })(syllDispatch)
                        }
                    />
                </Box>
            </Box>
            <Box className="flex flex-col justify-center space-y-4">
                <Typography variant="subtitle1">
                    (28) Tóm tắt quá trình công tác:
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">
                                    Từ tháng, năm đến tháng, năm
                                </TableCell>
                                <TableCell align="center">
                                    Chức danh, chức vụ, đơn vị công tác (đảng,
                                    chính quyền, đoàn thể, tổ chức xã hội) kể cả
                                    thời gian được đào tạo, bồi dưỡng về chuyên
                                    môn, nghiệp vụ
                                </TableCell>
                                <TableCell align="center">Chức năng</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {syll.value.summary.map((row) => (
                                <TableRow
                                    key={row}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        align="center"
                                    >
                                        <Box className="flex space-x-2">
                                            <DatePicker
                                                value={row.monthYearFrom}
                                                onChange={(datetime) =>
                                                    onChangeTextField(
                                                        'summary',
                                                        [
                                                            ...syll.value.summary.filter(
                                                                (item) =>
                                                                    item.id !=
                                                                    row.id
                                                            ),
                                                            {
                                                                ...row,
                                                                monthYearFrom:
                                                                    datetime,
                                                            },
                                                        ]
                                                    )(syllDispatch)
                                                }
                                                label="Từ tháng, năm"
                                                views={['month', 'year']}
                                                sx={{ border: 0 }}
                                            />
                                            <DatePicker
                                                value={row.monthYearTo}
                                                onChange={(datetime) =>
                                                    onChangeTextField(
                                                        'summary',
                                                        [
                                                            ...syll.value.summary.filter(
                                                                (item) =>
                                                                    item.id !=
                                                                    row.id
                                                            ),
                                                            {
                                                                ...row,
                                                                monthYearTo:
                                                                    datetime,
                                                            },
                                                        ]
                                                    )(syllDispatch)
                                                }
                                                label="Đến tháng, năm"
                                                views={['month', 'year']}
                                                sx={{ border: 0 }}
                                            />
                                        </Box>
                                    </TableCell>
                                    <TableCell
                                        contentEditable
                                        align="center"
                                        onBlur={(e) =>
                                            onChangeTextField('summary', [
                                                ...syll.value.summary.filter(
                                                    (item) => item.id != row.id
                                                ),
                                                {
                                                    ...row,
                                                    description:
                                                        e.target.textContent,
                                                },
                                            ])(syllDispatch)
                                        }
                                    >
                                        {row.description}
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton
                                            children={<DeleteIcon />}
                                            onClick={() =>
                                                onDeleteRowTable(
                                                    'summary',
                                                    row.id
                                                )(syllDispatch)
                                            }
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box className="flex justify-center items-center">
                    <IconButton
                        children={<AddIcon />}
                        onClick={() =>
                            onAddRowTable('summary', {
                                id: dayjs().unix(),
                                monthYearFrom: null,
                                monthYearTo: null,
                                description: '',
                            })(syllDispatch)
                        }
                    />
                </Box>
            </Box>
            <Box className="flex flex-col space-y-4">
                <Typography variant="subtitle1">
                    (29) Đặc điểm lịch sử bản thân:
                </Typography>
                <Typography variant="caption">
                    Khai rõ: bị bắt, bị tù (từ ngày tháng năm nào đến ngày tháng
                    năm nào, ở đâu?), đã khai báo cho ai, những vấn đề gì? Bản
                    thân có làm việc trong chế độ cũ (cơ quan, đơn vị nào, địa
                    điểm, chức danh, chức vụ, thời gian làm việc…):
                </Typography>
                <TextField
                    value={syll.value.selfExperience}
                    onChange={(e) =>
                        onChangeTextField(
                            'selfExperience',
                            e.target.value
                        )(syllDispatch)
                    }
                    variant="outlined"
                    multiline
                    maxRows={4}
                    fullWidth
                />
                <Typography variant="caption">
                    Tham gia hoặc có quan hệ với các tổ chức chính trị, kinh tế,
                    xã hội nào ở nước ngoài (làm gì, tổ chức nào, đặt trụ sở ở
                    đâu ..?):
                </Typography>
                <TextField
                    value={syll.value.selfJoinOrgan}
                    onChange={(e) =>
                        onChangeTextField(
                            'selfJoinOrgan',
                            e.target.value
                        )(syllDispatch)
                    }
                    variant="outlined"
                    multiline
                    maxRows={4}
                    fullWidth
                />
                <Typography variant="caption">
                    Có thân nhân (Cha, Mẹ, Vợ, Chồng, con, anh chị em ruột) ở
                    nước ngoài (làm gì, địa chỉ …)?
                </Typography>
                <TextField
                    value={syll.value.selfRelationship}
                    onChange={(e) =>
                        onChangeTextField(
                            'selfRelationship',
                            e.target.value
                        )(syllDispatch)
                    }
                    variant="outlined"
                    multiline
                    maxRows={4}
                    fullWidth
                />
            </Box>
            <Box className="flex flex-col space-y-4">
                <Typography variant="subtitle1">
                    (30) Quan hệ gia đình:
                </Typography>
                <Typography variant="caption">
                    Về bản thân: Cha, Mẹ, Vợ (hoặc chồng), các con, anh chị em
                    ruột
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">
                                    Mối quan hệ
                                </TableCell>
                                <TableCell align="center">Họ và tên</TableCell>
                                <TableCell align="center">Năm sinh</TableCell>
                                <TableCell align="center">
                                    Quê quán, nghề nghiệp, chức danh, chức vụ,
                                    đơn vị công tác, học tập, nơi ở (trong,
                                    ngoài nước); thành viên các tổ chức chính
                                    trị - xã hội …?)
                                </TableCell>
                                <TableCell align="center">Chức năng</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {syll.value.myRelationship.map((row) => (
                                <TableRow
                                    key={row}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell
                                        align="center"
                                        onBlur={(e) =>
                                            onChangeTextField(
                                                'myRelationship',
                                                [
                                                    ...syll.value.myRelationship.filter(
                                                        (item) =>
                                                            item.id != row.id
                                                    ),
                                                    {
                                                        ...row,
                                                        relationship:
                                                            e.target
                                                                .textContent,
                                                    },
                                                ]
                                            )(syllDispatch)
                                        }
                                    >
                                        <Autocomplete
                                            value={SelectedValue(
                                                syll.value.educationLevel.data,
                                                syll.value.educationLevel
                                                    .educationLevelId
                                            )}
                                            onChange={(e, item) =>
                                                onChangeTextField(
                                                    'educationLevel',
                                                    {
                                                        ...syll.value
                                                            .educationLevel,
                                                        educationLevelId: item
                                                            ? item.id
                                                            : null,
                                                    }
                                                )(syllDispatch)
                                            }
                                            disablePortal
                                            options={
                                                syll.value.educationLevel.data
                                            }
                                            fullWidth
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Mối quan hệ"
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell
                                        contentEditable
                                        align="center"
                                        onBlur={(e) =>
                                            onChangeTextField(
                                                'myRelationship',
                                                [
                                                    ...syll.value.myRelationship.filter(
                                                        (item) =>
                                                            item.id != row.id
                                                    ),
                                                    {
                                                        ...row,
                                                        name: e.target
                                                            .textContent,
                                                    },
                                                ]
                                            )(syllDispatch)
                                        }
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        <DatePicker
                                            value={row.birthday}
                                            onChange={(datetime) =>
                                                onChangeTextField(
                                                    'myRelationship',
                                                    [
                                                        ...syll.value.myRelationship.filter(
                                                            (item) =>
                                                                item.id !=
                                                                row.id
                                                        ),
                                                        {
                                                            ...row,
                                                            birthday: datetime,
                                                        },
                                                    ]
                                                )(syllDispatch)
                                            }
                                            label="Năm sinh"
                                            views={['year']}
                                            sx={{ border: 0 }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        contentEditable
                                        align="center"
                                        onBlur={(e) =>
                                            onChangeTextField(
                                                'myRelationship',
                                                [
                                                    ...syll.value.myRelationship.filter(
                                                        (item) =>
                                                            item.id != row.id
                                                    ),
                                                    {
                                                        ...row,
                                                        description:
                                                            e.target
                                                                .textContent,
                                                    },
                                                ]
                                            )(syllDispatch)
                                        }
                                    >
                                        {row.description}
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton
                                            children={<DeleteIcon />}
                                            onClick={() =>
                                                onDeleteRowTable(
                                                    'myRelationship',
                                                    row.id
                                                )(syllDispatch)
                                            }
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box className="flex justify-center items-center">
                    <IconButton
                        children={<AddIcon />}
                        onClick={() =>
                            onAddRowTable('myRelationship', {
                                id: dayjs().unix(),
                                relationship: '',
                                name: '',
                                birthday: null,
                                description: '',
                            })(syllDispatch)
                        }
                    />
                </Box>
                <Typography variant="caption">
                    Về bên vợ (hoặc chồng): Cha, Mẹ, anh chị em ruột
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">
                                    Mối quan hệ
                                </TableCell>
                                <TableCell align="center">Họ và tên</TableCell>
                                <TableCell align="center">Năm sinh</TableCell>
                                <TableCell align="center">
                                    Quê quán, nghề nghiệp, chức danh, chức vụ,
                                    đơn vị công tác, học tập, nơi ở (trong,
                                    ngoài nước); thành viên các tổ chức chính
                                    trị - xã hội …?)
                                </TableCell>
                                <TableCell align="center">Chức năng</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {syll.value.partnerRelationship.map((row) => (
                                <TableRow
                                    key={row}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell
                                        contentEditable
                                        align="center"
                                        onBlur={(e) =>
                                            onChangeTextField(
                                                'partnerRelationship',
                                                [
                                                    ...syll.value.partnerRelationship.filter(
                                                        (item) =>
                                                            item.id != row.id
                                                    ),
                                                    {
                                                        ...row,
                                                        relationship:
                                                            e.target
                                                                .textContent,
                                                    },
                                                ]
                                            )(syllDispatch)
                                        }
                                    >
                                        {row.relationship}
                                    </TableCell>
                                    <TableCell
                                        contentEditable
                                        align="center"
                                        onBlur={(e) =>
                                            onChangeTextField(
                                                'partnerRelationship',
                                                [
                                                    ...syll.value.partnerRelationship.filter(
                                                        (item) =>
                                                            item.id != row.id
                                                    ),
                                                    {
                                                        ...row,
                                                        name: e.target
                                                            .textContent,
                                                    },
                                                ]
                                            )(syllDispatch)
                                        }
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        <DatePicker
                                            value={row.birthday}
                                            onChange={(datetime) =>
                                                onChangeTextField(
                                                    'partnerRelationship',
                                                    [
                                                        ...syll.value.partnerRelationship.filter(
                                                            (item) =>
                                                                item.id !=
                                                                row.id
                                                        ),
                                                        {
                                                            ...row,
                                                            birthday: datetime,
                                                        },
                                                    ]
                                                )(syllDispatch)
                                            }
                                            label="Năm sinh"
                                            views={['year']}
                                            sx={{ border: 0 }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        contentEditable
                                        align="center"
                                        onBlur={(e) =>
                                            onChangeTextField(
                                                'partnerRelationship',
                                                [
                                                    ...syll.value.partnerRelationship.filter(
                                                        (item) =>
                                                            item.id != row.id
                                                    ),
                                                    {
                                                        ...row,
                                                        description:
                                                            e.target
                                                                .textContent,
                                                    },
                                                ]
                                            )(syllDispatch)
                                        }
                                    >
                                        {row.description}
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton
                                            children={<DeleteIcon />}
                                            onClick={() =>
                                                onDeleteRowTable(
                                                    'partnerRelationship',
                                                    row.id
                                                )(syllDispatch)
                                            }
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box className="flex justify-center items-center">
                    <IconButton
                        children={<AddIcon />}
                        onClick={() =>
                            onAddRowTable('partnerRelationship', {
                                id: dayjs().unix(),
                                relationship: '',
                                name: '',
                                birthday: null,
                                description: '',
                            })(syllDispatch)
                        }
                    />
                </Box>
            </Box>
            <Box className="flex flex-col space-y-4">
                <Typography variant="subtitle1">
                    (31) Diễn biến quá trình lương của cán bộ công chức:
                </Typography>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Tháng/Năm</TableCell>
                                <TableCell align="center">
                                    Mã ngạch/Bậc
                                </TableCell>
                                <TableCell align="center">
                                    Hệ số lương
                                </TableCell>
                                <TableCell align="center">Chức năng</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {syll.value.salaryEvolution.map((row) => (
                                <TableRow
                                    key={row}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        align="center"
                                    >
                                        <DatePicker
                                            value={row.monthYear}
                                            onChange={(datetime) =>
                                                onChangeTextField(
                                                    'salaryEvolution',
                                                    [
                                                        ...syll.value.salaryEvolution.filter(
                                                            (item) =>
                                                                item.id !=
                                                                row.id
                                                        ),
                                                        {
                                                            ...row,
                                                            monthYear: datetime,
                                                        },
                                                    ]
                                                )(syllDispatch)
                                            }
                                            label="Tháng/năm"
                                            views={['month', 'year']}
                                            sx={{ border: 0 }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        contentEditable
                                        align="center"
                                        onBlur={(e) =>
                                            onChangeTextField(
                                                'salaryEvolution',
                                                [
                                                    ...syll.value.salaryEvolution.filter(
                                                        (item) =>
                                                            item.id != row.id
                                                    ),
                                                    {
                                                        ...row,
                                                        civilClassCode:
                                                            e.target
                                                                .textContent,
                                                    },
                                                ]
                                            )(syllDispatch)
                                        }
                                    >
                                        {row.civilClassCode}
                                    </TableCell>
                                    <TableCell
                                        contentEditable
                                        align="center"
                                        onBlur={(e) =>
                                            onChangeTextField(
                                                'salaryEvolution',
                                                [
                                                    ...syll.value.salaryEvolution.filter(
                                                        (item) =>
                                                            item.id != row.id
                                                    ),
                                                    {
                                                        ...row,
                                                        salaryWage:
                                                            e.target
                                                                .textContent,
                                                    },
                                                ]
                                            )(syllDispatch)
                                        }
                                    >
                                        {row.salaryWage}
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton
                                            children={<DeleteIcon />}
                                            onClick={() =>
                                                onDeleteRowTable(
                                                    'salaryEvolution',
                                                    row.id
                                                )(syllDispatch)
                                            }
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box className="flex justify-center items-center">
                    <IconButton
                        children={<AddIcon />}
                        onClick={() =>
                            onAddRowTable('salaryEvolution', {
                                id: dayjs().unix(),
                                monthYear: null,
                                civilClassCode: '',
                                salaryWage: '',
                            })(syllDispatch)
                        }
                    />
                </Box>
            </Box>
            <TextField
                label="(32) Nhận xét, đánh giá của cơ quan, đơn vị quản lý và sử dụng cán bộ, công chức"
                value={syll.value.comment}
                onChange={(e) =>
                    onChangeTextField(
                        'comment',
                        e.target.value,
                        validateValueWithSpecialCharacters
                    )(syllDispatch)
                }
                variant="outlined"
                multiline
                maxRows={4}
                fullWidth
                required
            />
        </Box>
    );
};

export default PageThree;
