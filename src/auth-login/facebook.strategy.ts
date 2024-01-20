import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-facebook";


    @Injectable()
    export class FacebookStrategy extends PassportStrategy(Strategy, "facebook") {
    constructor() {
        super({
        clientID: '753603312867150',
        clientSecret: "dc9cdc1becfa7eff158729d82dc8d413",
        callbackURL: "https://xgoobk.ccontrolz.com/facebook/redirect",
        scope: "email",
        profileFields: ["emails", "name"],
    });
    }
    
    async validate(
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: (err: any, user: any, info?: any) => void
    ): Promise<any> {
        const { name, emails,id} = profile;
        const user = {
            id: id,
          email: emails[0].value,
          firstName: name.givenName,
          lastName: name.familyName
        };
        done(null,user);
      }
    }