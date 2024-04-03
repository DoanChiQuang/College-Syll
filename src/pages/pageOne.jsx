import React, { useEffect } from "react";
import { fetchDistrictData, fetchProviceData, fetchWardData, onChangeTextField } from "../context/actions/syllAction";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import { validateName, validateValueWithSpecialCharacters } from "../utils/validateFunc";
import dayjs from "dayjs";

const PageOne = ({syll, syllDispatch}) => {

    useEffect(() => {        
        fetchProviceData('placeOfBirth')(syllDispatch);
        fetchProviceData('homeTown')(syllDispatch);
        fetchProviceData('placeOfRegistered')(syllDispatch);
        fetchProviceData('placeOfLiving')(syllDispatch);
    }, []);

    useEffect(() => {        
        if(syll.value.placeOfBirth.provinceId) fetchDistrictData('placeOfBirth', syll.value.placeOfBirth.provinceId)(syllDispatch);
        if(syll.value.homeTown.provinceId) fetchDistrictData('homeTown', syll.value.homeTown.provinceId)(syllDispatch);
        if(syll.value.placeOfRegistered.provinceId) fetchDistrictData('placeOfRegistered', syll.value.placeOfRegistered.provinceId)(syllDispatch);
        if(syll.value.placeOfLiving.provinceId) fetchDistrictData('placeOfLiving', syll.value.placeOfLiving.provinceId)(syllDispatch);
    }, [syll.value.placeOfBirth.provinceId, syll.value.homeTown.provinceId, syll.value.placeOfRegistered.provinceId, syll.value.placeOfLiving.provinceId])

    useEffect(() => {        
        if(syll.value.placeOfBirth.districtId) fetchWardData('placeOfBirth', syll.value.placeOfBirth.districtId)(syllDispatch);
        if(syll.value.homeTown.districtId) fetchWardData('homeTown', syll.value.homeTown.districtId)(syllDispatch);
        if(syll.value.placeOfRegistered.districtId) fetchWardData('placeOfRegistered', syll.value.placeOfRegistered.districtId)(syllDispatch);
        if(syll.value.placeOfLiving.districtId) fetchWardData('placeOfLiving', syll.value.placeOfLiving.districtId)(syllDispatch);
    }, [syll.value.placeOfBirth.districtId, syll.value.homeTown.districtId, syll.value.placeOfRegistered.districtId, syll.value.placeOfLiving.districtId])

    const SelectedValue = (data, value) => {
        const selectedItem = React.useMemo(() => {
            return data.find(item => item.id === value);
        }, [data, value])

        return selectedItem || null;
    }

    const getMaxDate = (num = 0) => {        
        const maxDateValue = dayjs().subtract(num, 'year');
        return maxDateValue;
    }     

    return (
        <Box className="flex flex-col space-y-4">
            <TextField
                label="(1) Họ và tên khai sinh"
                value={syll.value.realname}
                onChange={(e) => onChangeTextField('realname', e.target.value, validateName)(syllDispatch)}
                variant="outlined"
                required
            />
            <TextField
                label="(2) Tên gọi khác"
                value={syll.value.nickname}
                onChange={(e) => onChangeTextField('nickname', e.target.value, validateName)(syllDispatch)}
                variant="outlined"                    
            />
            <DatePicker
                label="(3) Ngày sinh"
                value={syll.value.birthday}
                onChange={(datetime) => onChangeTextField('birthday', datetime)(syllDispatch)}
                format="DD/MM/YYYY"                                        
                maxDate={getMaxDate(18)}
                sx={{ border: 0 }}
            />
            <FormGroup>
                <Box className="flex items-center space-x-4">
                    <Typography align="center" variant="subtitle1">
                        Giới tính:
                    </Typography>
                    <FormControlLabel
                        control={<Checkbox checked={syll.value.sex == 0} value={0} onChange={(e) => onChangeTextField('sex', e.target.value)(syllDispatch)} />}
                        label="Nam"
                    />
                    <FormControlLabel 
                        control={<Checkbox checked={syll.value.sex == 1} value={1} onChange={(e) => onChangeTextField('sex', e.target.value)(syllDispatch)} />} 
                        label="Nữ" 
                    />
                </Box>
            </FormGroup>
            <Box className="space-y-2">
                <Typography variant="subtitle1">(4) Nơi sinh</Typography>
                <Box className="flex space-x-4">
                    <Autocomplete
                        value={SelectedValue(syll.value.placeOfBirth.address.province, syll.value.placeOfBirth.provinceId)}
                        onChange={(e, item) => onChangeTextField('placeOfBirth', {...syll.value.placeOfBirth, provinceId: item ? item.id : null, districtId: null, wardId: null})(syllDispatch)}                            
                        disablePortal
                        options={syll.value.placeOfBirth.address.province}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Tỉnh/Thành phố" />}
                    />
                    <Autocomplete
                        value={SelectedValue(syll.value.placeOfBirth.address.district, syll.value.placeOfBirth.districtId)}                            
                        onChange={(e, item) => onChangeTextField('placeOfBirth', {...syll.value.placeOfBirth, districtId: item ? item.id : null, wardId: null})(syllDispatch)}
                        disablePortal                            
                        options={syll.value.placeOfBirth.address.district}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Quận/Huyện" />}
                    />
                    <Autocomplete
                        value={SelectedValue(syll.value.placeOfBirth.address.ward, syll.value.placeOfBirth.wardId)}
                        onChange={(e, item) => onChangeTextField('placeOfBirth', {...syll.value.placeOfBirth, wardId: item ? item.id : null})(syllDispatch)}
                        disablePortal
                        options={syll.value.placeOfBirth.address.ward}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Phường/Xã" />}
                    />
                </Box>
            </Box>
            <Box className="space-y-2">
                <Typography variant="subtitle1">(5) Quê quán</Typography>
                <Box className="flex space-x-4">
                    <Autocomplete
                        value={SelectedValue(syll.value.homeTown.address.province, syll.value.homeTown.provinceId)}
                        onChange={(e, item) => onChangeTextField('homeTown', {...syll.value.homeTown, provinceId: item ? item.id : null, districtId: null, wardId: null})(syllDispatch)}                            
                        disablePortal
                        options={syll.value.homeTown.address.province}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Tỉnh/Thành phố" />}
                    />
                    <Autocomplete
                        value={SelectedValue(syll.value.homeTown.address.district, syll.value.homeTown.districtId)}                            
                        onChange={(e, item) => onChangeTextField('homeTown', {...syll.value.homeTown, districtId: item ? item.id : null, wardId: null})(syllDispatch)}
                        disablePortal                            
                        options={syll.value.homeTown.address.district}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Quận/Huyện" />}
                    />
                    <Autocomplete
                        value={SelectedValue(syll.value.homeTown.address.ward, syll.value.homeTown.wardId)}
                        onChange={(e, item) => onChangeTextField('homeTown', {...syll.value.homeTown, wardId: item ? item.id : null})(syllDispatch)}
                        disablePortal
                        options={syll.value.homeTown.address.ward}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Phường/Xã" />}
                    />
                </Box>
            </Box>
            <Autocomplete
                value={SelectedValue(syll.value.nation.data, syll.value.nation.nationId)}
                onChange={(e, item) => onChangeTextField('nation', {...syll.value.nation, nationId: item ? item.id : null})(syllDispatch)}
                disablePortal
                options={syll.value.nation.data}
                fullWidth
                renderInput={(params) => <TextField {...params} label="(6) Dân tộc" />}
            />
            <Autocomplete
                value={SelectedValue(syll.value.religion.data, syll.value.religion.religionId)}
                onChange={(e, item) => onChangeTextField('religion', {...syll.value.religion, religionId: item ? item.id : null})(syllDispatch)}
                disablePortal
                options={syll.value.religion.data}
                fullWidth
                renderInput={(params) => <TextField {...params} label="(7) Tôn giáo" />}
            />
            <Box className="space-y-2">
                <Typography variant="subtitle1">(8) Nơi đăng ký hộ khẩu thường trú</Typography>
                <Box className="flex space-x-4">
                    <Autocomplete
                        value={SelectedValue(syll.value.placeOfRegistered.address.province, syll.value.placeOfRegistered.provinceId)}
                        onChange={(e, item) => onChangeTextField('placeOfRegistered', {...syll.value.placeOfRegistered, provinceId: item ? item.id : null, districtId: null, wardId: null})(syllDispatch)}                            
                        disablePortal
                        options={syll.value.placeOfRegistered.address.province}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Tỉnh/Thành phố" />}
                    />
                    <Autocomplete
                        value={SelectedValue(syll.value.placeOfRegistered.address.district, syll.value.placeOfRegistered.districtId)}                            
                        onChange={(e, item) => onChangeTextField('placeOfRegistered', {...syll.value.placeOfRegistered, districtId: item ? item.id : null, wardId: null})(syllDispatch)}
                        disablePortal                            
                        options={syll.value.placeOfRegistered.address.district}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Quận/Huyện" />}
                    />
                    <Autocomplete
                        value={SelectedValue(syll.value.placeOfRegistered.address.ward, syll.value.placeOfRegistered.wardId)}
                        onChange={(e, item) => onChangeTextField('placeOfRegistered', {...syll.value.placeOfRegistered, wardId: item ? item.id : null})(syllDispatch)}
                        disablePortal
                        options={syll.value.placeOfRegistered.address.ward}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Phường/Xã" />}
                    />
                    <TextField
                        label="Thôn/Ấp"
                        value={syll.value.placeOfRegistered.village}
                        onChange={(e) => onChangeTextField('placeOfRegistered', {...syll.value.placeOfRegistered, village: e.target.value}, validateValueWithSpecialCharacters)(syllDispatch)}
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        label="Số nhà, đường phố"
                        value={syll.value.placeOfRegistered.street}
                        onChange={(e) => onChangeTextField('placeOfRegistered', {...syll.value.placeOfRegistered, street: e.target.value}, validateValueWithSpecialCharacters)(syllDispatch)}
                        variant="outlined"
                        fullWidth
                    />
                </Box>
            </Box>
            <Box className="space-y-2">
                <Typography variant="subtitle1">(9) Nơi ở hiện nay</Typography>
                <Box className="flex space-x-4">
                    <Autocomplete
                        value={SelectedValue(syll.value.placeOfLiving.address.province, syll.value.placeOfLiving.provinceId)}
                        onChange={(e, item) => onChangeTextField('placeOfLiving', {...syll.value.placeOfLiving, provinceId: item ? item.id : null, districtId: null, wardId: null})(syllDispatch)}                            
                        disablePortal
                        options={syll.value.placeOfLiving.address.province}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Tỉnh/Thành phố" />}
                    />
                    <Autocomplete
                        value={SelectedValue(syll.value.placeOfLiving.address.district, syll.value.placeOfLiving.districtId)}                            
                        onChange={(e, item) => onChangeTextField('placeOfLiving', {...syll.value.placeOfLiving, districtId: item ? item.id : null, wardId: null})(syllDispatch)}
                        disablePortal                            
                        options={syll.value.placeOfLiving.address.district}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Quận/Huyện" />}
                    />
                    <Autocomplete
                        value={SelectedValue(syll.value.placeOfLiving.address.ward, syll.value.placeOfLiving.wardId)}
                        onChange={(e, item) => onChangeTextField('placeOfLiving', {...syll.value.placeOfLiving, wardId: item ? item.id : null})(syllDispatch)}
                        disablePortal
                        options={syll.value.placeOfLiving.address.ward}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Phường/Xã" />}
                    />
                    <TextField
                        label="Thôn/Ấp"
                        value={syll.value.placeOfLiving.village}
                        onChange={(e) => onChangeTextField('placeOfLiving', {...syll.value.placeOfLiving, village: e.target.value}, validateValueWithSpecialCharacters)(syllDispatch)}
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        label="Số nhà, đường phố"
                        value={syll.value.placeOfLiving.street}
                        onChange={(e) => onChangeTextField('placeOfLiving', {...syll.value.placeOfLiving, street: e.target.value}, validateValueWithSpecialCharacters)(syllDispatch)}
                        variant="outlined"
                        fullWidth
                    />
                </Box>
            </Box>                
        </Box>
    )
}

export default PageOne;