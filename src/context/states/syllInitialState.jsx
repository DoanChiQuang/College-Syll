import { dataBloodGroup, dataCivilClass, dataEducationLevel, dataNation, dataPoliticalTheory, dataReligion } from '../../constants/sample';

export default {
    value: {
        realname: '',
        nickname: '',
        birthday: null,
        sex: 0,
        placeOfBirth: {
            provinceId: null,
            districtId: null,
            wardId: null,
            address: {
                province: [],
                district: [],
                ward: [],
                loading: false,
            },
        },
        homeTown: {
            provinceId: null,
            districtId: null,
            wardId: null,
            address: {
                province: [],
                district: [],
                ward: [],
                loading: false,
            },
        },
        nation: {
            data: dataNation,
            nationId: null,
        },
        religion: {
            data: dataReligion,
            religionId: null,
        },
        placeOfRegistered: {
            provinceId: null,
            districtId: null,
            wardId: null,
            village: '',
            street: '',
            address: {
                province: [],
                district: [],
                ward: [],
                loading: false,
            },
        },
        placeOfLiving: {
            provinceId: null,
            districtId: null,
            wardId: null,
            village: '',
            street: '',
            address: {
                province: [],
                district: [],
                ward: [],
                loading: false,
            },
        },
        applyJob: '',
        applyDate: null,
        applyOrgan: '',
        jobPosition: '',
        jobTitle: '',
        civilClass: {
            data: dataCivilClass,
            civilClassId: null
        },
        civilClassCode: '',
        salaryWage: '',
        salaryCoefficient: '',
        salaryBenefitDay: null,
        salaryAddPosition: '',
        salaryAddOther: '',
        educationLevel: {
            data: dataEducationLevel,
            educationLevelId: null
        },
        qualification: '',
        politicalTheory: {
            data: dataPoliticalTheory,
            politicalTheoryId: null
        },
        stateManage: '',
        languageDegree: '',
        ITDegree: '',
        joinCommunistDate: null,
        joinCommunistOfficialDate: null,
        joinSocialOrganDate: null,
        joinSocialOrganWork: '',
        enlistmentDate: null,
        demobilizationDate: null,
        rank: '',
        title: '',
        workExperience: '',
        achievement: '',
        achievementYear: null,
        punishment: '',
        punishmentYear: null,
        healthStatus: '',
        height: '',
        weight: '',
        bloodGroup: {
            data: dataBloodGroup,
            bloodGroupId: null
        },
        soldierRank: '',
        soldierFamily: '',
        id: '',
        idDate: null,
        socialId: '',
        training: [
            {schoolname: 'Đại học Sài gòn', major: 'IT', type: 'Chính quy', certificate: 'Kỹ sư'}
        ],
        summary: [
            {name: '1'}
        ],
        selfExperience: '',
        selfJoinOrgan: '',
        selfRelationship: '',
        myRelationship: [
            {}
        ],
        partnerRelationship: [],
        salaryEvolution: [],
        comment: ''
    },
    errorKeys: [],
    errorKeysMessage: {},
};
