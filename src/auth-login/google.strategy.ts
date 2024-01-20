import {PassportStrategy} from "@nestjs/passport";
import {Strategy,VerifyCallback} from "passport-google-oauth20";
import { Injectable } from "@nestjs/common";

@Injectable()

export class GoogleStrategy extends PassportStrategy(Strategy,'google'){
    constructor(){
        super({
            clientID: '490423802615-74thngoeun28fl993ce6ei9od5fjqgln.apps.googleusercontent.com',
            clientSecret: "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",
            callbackURL: 'https://xgoobk.ccontrolz.com/auth/google/callback',
            scope:['email','profile']
        })
    }

    async validate(accessToken: string, refreshToken:string,profile: any,done:VerifyCallback):Promise<any>{
        const {name,emails,photos,id} = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.lastName,
            picture: photos[0].value,
            accessToken,
            id: id
        }
        done(null,user);
    }
}