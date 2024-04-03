import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { onChangeTextField } from '../context/actions/syllAction';
import Autocomplete from '@mui/material/Autocomplete';
import React from 'react';

const PageTwo = ({ syll, syllDispatch }) => {
    
    const SelectedValue = (data, value) => {
        const selectedItem = React.useMemo(() => {
            return data.find(item => item.id === value);
        }, [data, value])        
        return selectedItem || null;
    }
    
    const getCivilClassCode = () => {
        const selectedItem = syll.value.civilClass.data.find(item => item.id == syll.value.civilClass.civilClassId);
        if(selectedItem) {
            return selectedItem.code;
        }
        return "";
    }

    return (
        <Box className="flex flex-col space-y-4">
            <TextField
                label="(10) Nghề nghiệp khi được tuyển dụng"
                value={syll.value.applyJob}
                onChange={(e) => onChangeTextField('applyJob', e.target.value)(syllDispatch)}
                variant="outlined"
                required
            />
            <Box className="flex items-center space-x-4">
                <DatePicker
                    label="(11.1) Ngày tuyển dụng"
                    value={syll.value.applyDate}
                    onChange={(datetime) => onChangeTextField('applyDate', datetime)(syllDispatch)}
                    format="DD/MM/YYYY"
                    sx={{ border: 0 }}
                    className="w-full"
                />
                <TextField
                    label="(11.2) Cơ quan tuyển dụng"
                    value={syll.value.applyOrgan}
                    onChange={(e) => onChangeTextField('applyOrgan', e.target.value)(syllDispatch)}
                    variant="outlined"
                    required
                    fullWidth
                />
            </Box>
            <TextField
                label="(12) Chức vụ (chức danh) hiện tại"
                value={syll.value.jobPosition}
                onChange={(e) => onChangeTextField('jobPosition', e.target.value)(syllDispatch)}
                variant="outlined"
                required
            />
            <TextField
                label="(13) Công việc chính được giao"
                value={syll.value.jobTitle}
                onChange={(e) => onChangeTextField('jobTitle', e.target.value)(syllDispatch)}
                variant="outlined"
                required
            />
            <Box className="flex items-center space-x-4">
                <Autocomplete
                    value={SelectedValue(syll.value.civilClass.data, syll.value.civilClass.civilClassId)}
                    onChange={(e, item) => onChangeTextField('civilClass', {...syll.value.civilClass, civilClassId: item ? item.id : null})(syllDispatch)}                            
                    disablePortal
                    options={syll.value.civilClass.data}
                    fullWidth                    
                    renderInput={(params) => <TextField {...params} label="(14.1) Ngạch công chức (viên chức)" />}
                />                
                <TextField
                    label="(14.2) Mã ngạch"
                    variant="outlined"
                    value={getCivilClassCode()}
                    InputProps={{ readOnly: true }}
                    fullWidth
                />
            </Box>
            <Box className="flex items-center space-x-4">
                <TextField
                    label="(14.3) Bậc lương"
                    variant="outlined"
                    value={syll.value.salaryWage}
                    onChange={(e) => onChangeTextField('salaryWage', e.target.value)(syllDispatch)}
                    fullWidth
                    required
                />
                <TextField
                    label="(14.4) Hệ số"
                    value={syll.value.salaryCoefficient}
                    onChange={(e) => onChangeTextField('salaryCoefficient', e.target.value)(syllDispatch)}
                    variant="outlined"
                    fullWidth
                    required
                />
                <DatePicker
                    label="(14.5) Ngày hưởng"
                    value={syll.value.salaryBenefitDay}
                    onChange={(datetime) => onChangeTextField('salaryBenefitDay', datetime)(syllDispatch)}
                    views={['day']}
                    sx={{ border: 0 }}
                    className="w-full"
                />
                <TextField
                    label="(14.6) Phụ cấp chức vụ"
                    value={syll.value.salaryAddPosition}
                    onChange={(e) => onChangeTextField('salaryAddPosition', e.target.value)(syllDispatch)}
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    label="(14.7) Phụ cấp khác"
                    value={syll.value.salaryAddOther}
                    onChange={(e) => onChangeTextField('salaryAddOther', e.target.value)(syllDispatch)}
                    variant="outlined"
                    fullWidth
                    required
                />
            </Box>
            <Autocomplete
                value={SelectedValue(syll.value.educationLevel.data, syll.value.educationLevel.educationLevelId)}
                onChange={(e, item) => onChangeTextField('educationLevel', {...syll.value.educationLevel, educationLevelId: item ? item.id : null})(syllDispatch)}
                disablePortal
                options={syll.value.educationLevel.data}
                fullWidth                    
                renderInput={(params) => <TextField {...params} label="(15.1) Trình độ giáo dục phổ thông (đã tốt nghiệp lớp mấy/thuộc hệ nào)" />}
            />            
            <TextField
                label="(15.2) Trình độ chuyên môn cao nhất"
                value={syll.value.qualification}
                onChange={(e) => onChangeTextField('qualification', e.target.value)(syllDispatch)}
                variant="outlined"
                fullWidth
                required
            />
            <Box className="flex items-center space-x-4">
                <Autocomplete
                    value={SelectedValue(syll.value.politicalTheory.data, syll.value.politicalTheory.politicalTheoryId)}
                    onChange={(e, item) => onChangeTextField('politicalTheory', {...syll.value.politicalTheory, politicalTheoryId: item ? item.id : null})(syllDispatch)}
                    disablePortal
                    options={syll.value.politicalTheory.data}
                    fullWidth                    
                    renderInput={(params) => <TextField {...params} label="15.3) Lý luận chính trị" />}
                />
                <TextField
                    label="(15.4) Quản lý nhà nước"
                    value={syll.value.stateManage}
                    onChange={(e) => onChangeTextField('stateManage', e.target.value)(syllDispatch)}
                    variant="outlined"
                    fullWidth
                    required
                />
            </Box>
            <Box className="flex items-center space-x-4">
                <TextField
                    label="(15.5) Ngoại ngữ"
                    value={syll.value.languageDegree}
                    onChange={(e) => onChangeTextField('languageDegree', e.target.value)(syllDispatch)}
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    label="(15.6) Tin học"
                    value={syll.value.ITDegree}
                    onChange={(e) => onChangeTextField('ITDegree', e.target.value)(syllDispatch)}
                    variant="outlined"
                    fullWidth
                    required
                />
            </Box>
            <Box className="flex items-center space-x-4">
                <DatePicker
                    label="(16.1) Ngày vào Đảng Cộng sản Việt Nam"
                    value={syll.value.joinCommunistDate}
                    onChange={(datetime) => onChangeTextField('joinCommunistDate', datetime)(syllDispatch)}
                    format="DD/MM/YYYY"
                    sx={{ border: 0 }}
                    className="w-full"
                />
                <DatePicker
                    label="(16.2) Ngày chính thức"
                    value={syll.value.joinCommunistOfficialDate}
                    onChange={(datetime) => onChangeTextField('joinCommunistOfficialDate', datetime)(syllDispatch)}
                    format="DD/MM/YYYY"
                    sx={{ border: 0 }}
                    className="w-full"
                />
            </Box>
            <Box className="flex items-center space-x-4">
                <DatePicker
                    label="(17.1) Ngày tham gia tổ chức chính trị - xã hội"
                    value={syll.value.joinSocialOrganDate}
                    onChange={(datetime) => onChangeTextField('joinSocialOrganDate', datetime)(syllDispatch)}
                    format="DD/MM/YYYY"
                    sx={{ border: 0 }}
                    className="w-full"
                />
                <TextField
                    label="(17.2) Công việc trong tổ chức đó"
                    value={syll.value.joinSocialOrganWork}
                    onChange={(e) => onChangeTextField('joinSocialOrganWork', e.target.value)(syllDispatch)}
                    variant="outlined"
                    fullWidth
                    required
                />
            </Box>
            <Box className="flex items-center space-x-4">
                <DatePicker
                    label="(18.1) Ngày nhập ngũ"
                    value={syll.value.enlistmentDate}
                    onChange={(datetime) => onChangeTextField('enlistmentDate', datetime)(syllDispatch)}
                    format="DD/MM/YYYY"
                    sx={{ border: 0 }}
                    className="w-full"
                />
                <DatePicker
                    label="(18.2) Ngày xuất ngũ"
                    value={syll.value.demobilizationDate}
                    onChange={(datetime) => onChangeTextField('demobilizationDate', datetime)(syllDispatch)}
                    format="DD/MM/YYYY"
                    sx={{ border: 0 }}
                    className="w-full"
                />
                <TextField
                    label="(18.3) Quân hàm cao nhất"
                    value={syll.value.rank}
                    onChange={(e) => onChangeTextField('rank', e.target.value)(syllDispatch)}
                    variant="outlined"
                    fullWidth
                    required
                />
            </Box>
            <TextField
                label="(19) Danh hiệu được phong tặng cao nhất"
                value={syll.value.title}
                onChange={(e) => onChangeTextField('title', e.target.value)(syllDispatch)}
                variant="outlined"
                fullWidth
                required
            />
        </Box>
    );
};

export default PageTwo;