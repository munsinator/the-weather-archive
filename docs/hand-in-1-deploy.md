# Hand-In 1: deploy static draft to S3 (AWS Academy Learner Lab)

1. `cd frontend && npm install && npm run build` (output in `dist/`)
2. S3 > Create bucket (unique name, region us-east-1), untick Block all public access
3. Bucket > Properties > Static website hosting > Enable, index document `index.html`
4. Bucket > Permissions > Bucket policy:
```json
{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":"*","Action":"s3:GetObject","Resource":"arn:aws:s3:::YOUR-BUCKET/*"}]}
```
5. Upload: `aws s3 sync dist/ s3://YOUR-BUCKET --delete`
6. Open the website endpoint (http://YOUR-BUCKET.s3-website-us-east-1.amazonaws.com), take screenshots, keep the link for the live demo in unit 7.

Learner Lab: credentials expire per session, refresh them via AWS Details before using the CLI.
