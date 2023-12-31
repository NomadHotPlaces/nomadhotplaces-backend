export const USER = {
  EMAIL: {
    KR: '이메일',
    MIN_LENGTH: 5,
    MAX_LENGTH: 255,
    REG_EXP: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },

  PASSWORD: {
    KR: '비밀번호',
    MIN_LENGTH: 8,
    MAX_LENGTH: 255,
    get REG_EXP(): RegExp {
      return new RegExp(`^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$`);
    },
  },

  NAME: {
    KR: '이름',
    MIN_LENGTH: 2,
    MAX_LENGTH: 17,
    REG_EXP: /^[가-힣]+$/,
  },

  USERNAME: {
    KR: '닉네임',
    MIN_LENGTH: 2,
    MAX_LENGTH: 17,
    REG_EXP: /^[a-zA-Z0-9]+$/,
  },

  ROLE: {
    KR: '권한',
    MAX_LENGTH: 5,
  },

  PROVIDER: {
    KR: 'OAuth 제공자',
    MAX_LENGTH: 20,
  },

  SNS_ID: {
    KR: '연동된 SNS 아이디',
  },
};
