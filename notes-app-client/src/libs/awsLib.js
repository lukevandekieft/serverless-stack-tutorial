import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  //vault is sending this to the user's personal S3 section. Removing the key word would allegedly allow posting to a shared storage area
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type
  });

  return stored.key;
}
