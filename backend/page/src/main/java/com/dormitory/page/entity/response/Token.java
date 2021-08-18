package com.dormitory.page.entity.response;

public class Token {
    private String tokenName;
    private String tokenValue;

    public Token(String tokenName, String tokenValue) {
        this.tokenName = tokenName;
        this.tokenValue = tokenValue;
    }

    public String getTokenName() {
        return tokenName;
    }

    public void setTokenName(String tokenName) {
        this.tokenName = tokenName;
    }

    public String getTokenValue() {
        return tokenValue;
    }

    public void setTokenValue(String tokenValue) {
        this.tokenValue = tokenValue;
    }
}
