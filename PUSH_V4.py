import os
os.system("git init")
os.system("git remote add origin https://github.com/popescu345345/solana-safety-v4.git")
os.system("git add .")
os.system('git commit -m "RESTORE_V4_LEGACY"')
os.system("git push -f origin master")
