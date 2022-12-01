import admin from 'firebase-admin'

import { config } from "dotenv";
config({ path: process.ENV })

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCl6ra7lfFVwlu0\ntKpv45TkHhNx4sAvr4O2AEM7xhYsP9I+aE0FBehWORx7lTb3V92iiYArRsMabscm\ns0fPRh7MQjIXqbGwsnpNatshL0ZCOGIhFzBYtIgGB0Eu9AgC3UlKIelu2VJ00d31\nqu72zdTORDnDSA59syjhDlijourDnQyhao1qPFSKQbr66o8BjVRi45bOkhcNnyr8\nRlqsuiV1a+Up+qTW5SRLkKw4TGXMpHKjAQTjeFsBu9pRO8bom/fAVHkR0osQv7PG\n9lhgGs8+92n8JvLN65tIqD5vt3ETAWd7COOnLu3LuHwWzrZ1lxATuCYSJgDysGYD\nswhOM0RJAgMBAAECggEAIuLbUU4R1IptZe2m+KfNormANS4MYvpwo1Ai0uqvttYk\niuK7bxby505S4tlZGWDsRUTMIk1asLAiR8ziiH6h8yjoB3my1whwFt8k/DFIgJwC\nZhrOG5i6ESptVkYReSi2RFQlFR207MND/GfYnyRgXo6R5rG7+ko1ijzN/no/Cqog\nVkvWx+vYIWxj5BXcbkZPUMuuDU2LYqmsrWskjr+aR9WpYLFxlX2GmB2WqAC6jcBX\nJYSBgE46n9+Ygr0QpV7X0J0LL0yenO+5VeiqLP8R4etPm81WP0BNAewyo2HhpI1V\n3VnU/H8KNj92VgNntYc5qL7sCnVEMc91VVB7vvG8kQKBgQDO3RKt+gVsr9de4m8n\nfpTUUT2oezCtyppjOgZHpGsuWyS+HAeYUqOenpnQWbvVnS9X2qPoxTKWUOrf40Ug\nnQltwqKTei5CDRhLg8J9D+qTERVyA/7NpsPq6y4YlqPOyTQVunzD+DlIV5pNJ0jy\n8Ld+WKXNbjCBN9lj281fz50RpwKBgQDNU8JqCDSG2rP6JTsdt/pBEfbNY0pcsw8y\nMDu6RT17ruZzswPgBj3hHxoa2u9WB0ak0TaPlPOZxkA2zPo6Wdl7zsn6K4YBWZZ/\nHq3MfpwBmqa29s05ptj9PDznznDM5bmCAQ35qt86fyi5f1sAztUIQbYvvnatAIy2\nt1truBNYjwKBgQDMtF4oxbKahEO3BJIEXjG/DQnb8NQSFtzCdogCW0UpIU5xxmEJ\nrjV14PLLCBFlaN+Rq63pyUKvFzHmDgu5I01STXn+QLkH6ddx2tgaVCbIE+7J3gRG\n09EqZkI+WMuO9PJS0jFm5/sfiHkMAmUg625ZXDXu3SyoonDAbaGFP3jqHwKBgQC1\nYBwI1h6wUVlSyrih0/b4rAm7/M2ffX0a9IiOTsO1Ehb4dVYi+uCGkJbayjNJZzv8\nM+Niik11tS7cOc2A5gW73DuHBhNl9eF/gXY9gkoFELvcO7+mAcEEUcXrbu0t0nBA\navYRaeOvJMywr9OPryV4GbP6EOF8iVPDw8y6JuzP+QKBgCcK46EwdDQAuPd+ZEY3\nPnq36XXjWOkAZ234A8HTvyYn3kO8ypZZPBQdzwok1qLcel+siqi8f5EE1WF5OQHy\nvfG4TBGEYAZeXaQ2WBQtOynFt0zdHxnk74DuHZidTRYhpLZRvdiFr4T71kXSaURr\n1knjOc5+tLlAm1SQ6gSw/tbH\n-----END PRIVATE KEY-----\n",
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  }),
});

export default firebaseApp;
