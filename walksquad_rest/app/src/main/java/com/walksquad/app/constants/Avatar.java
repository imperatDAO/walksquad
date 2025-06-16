package com.walksquad.app.constants;

public enum Avatar {

    AVATAR_DEFAULT("avatar_default.png"),
    AVATAR_1("avatar_1.png"),
    AVATAR_2("avatar_2.png"),
    AVATAR_3("avatar_3.png");
    
    private final String fileName;

    Avatar(String filename) {
        this.fileName = filename;
    }

    public String getFilename() {
        return fileName;
    }

    public static Avatar getAvatar(String avatar) {
        if (avatar == null || avatar.isEmpty()) {
            return AVATAR_DEFAULT;
        }

        try {
            return Avatar.valueOf(avatar.toUpperCase());
        } catch (IllegalArgumentException e) {
            return AVATAR_DEFAULT;
        }
    }

}
