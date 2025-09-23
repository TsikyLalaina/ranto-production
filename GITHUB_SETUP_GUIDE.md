# GitHub Repository Setup Guide for Windows

This guide will walk you through creating a GitHub repository and pushing your Ranto project to GitHub using Windows Command Prompt.

## Prerequisites

Before starting, make sure you have:
- [Git for Windows](https://git-scm.com/download/win) installed
- A GitHub account (create one at https://github.com if you don't have one)
- Git configured with your user details (see Step 1 below)

## Step 1: Configure Git (If Not Already Done)

Open Command Prompt (cmd) and run these commands:

```cmd
git config --global user.name "Your Full Name"
git config --global user.email "your-email@example.com"
```

Replace "Your Full Name" and "your-email@example.com" with your actual name and email.

## Step 2: Create GitHub Repository Online

1. Go to https://github.com and sign in to your account
2. Click the green "New" button (or the "+" icon in the top right corner)
3. Fill out the repository details:
   - **Repository name**: `ranto-development`
   - **Description**: `Ranto - Madagascar Business Networking Platform`
   - **Visibility**: Choose "Public" or "Private" (your preference)
   - **Initialize repository**: Leave all checkboxes UNCHECKED (we have existing code)
4. Click "Create repository"

## Step 3: Navigate to Your Project Directory

Open Command Prompt and navigate to your project:

```cmd
cd C:\Users\lalaina\miharina-hub-dev
```

## Step 4: Initialize Git Repository (If Not Already Done)

Check if Git is already initialized:

```cmd
git status
```

If you get an error saying "not a git repository", initialize Git:

```cmd
git init
```

## Step 5: Add All Files to Git

Add all project files to the staging area:

```cmd
git add .
```

## Step 6: Create Initial Commit

Create your first commit:

```cmd
git commit -m "Initial commit: Ranto business networking platform"
```

## Step 7: Add GitHub Remote Repository

Replace `YOUR_USERNAME` with your actual GitHub username:

```cmd
git remote add origin https://github.com/YOUR_USERNAME/ranto-development.git
```

For example, if your username is `john-doe`:
```cmd
git remote add origin https://github.com/john-doe/ranto-development.git
```

## Step 8: Set Default Branch Name

Set the main branch name to 'main':

```cmd
git branch -M main
```

## Step 9: Push Code to GitHub

Push your code to GitHub:

```cmd
git push -u origin main
```

**Note**: You may be prompted to enter your GitHub credentials. If you have two-factor authentication enabled, you'll need to use a Personal Access Token instead of your password.

## Step 10: Verify Upload

1. Go to your GitHub repository URL: `https://github.com/YOUR_USERNAME/ranto-development`
2. You should see all your project files uploaded
3. The README.md should display the project information

## Creating a Personal Access Token (If Needed)

If you encounter authentication issues, create a Personal Access Token:

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a descriptive name like "Ranto Development"
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. Use this token as your password when prompted

## Alternative: Using Git Bash (Recommended)

If you prefer using Git Bash instead of Command Prompt:

1. Right-click in your project folder
2. Select "Git Bash Here"
3. Follow the same commands as above

## Common Issues and Solutions

### Issue: "remote origin already exists"
**Solution**: Remove the existing remote and add the correct one:
```cmd
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/ranto-development.git
```

### Issue: "failed to push some refs"
**Solution**: Force push (only for initial setup):
```cmd
git push -u origin main --force
```

### Issue: Authentication failed
**Solution**: Use a Personal Access Token instead of your password (see Step 10 above)

### Issue: "fatal: not a git repository"
**Solution**: Make sure you're in the correct directory and run `git init`

## Updating Code Later

After making changes to your code, use these commands to update GitHub:

```cmd
# Add all changes
git add .

# Create a commit with a descriptive message
git commit -m "Description of what you changed"

# Push changes to GitHub
git push origin main
```

## Setting Up SSH (Optional but Recommended)

For easier authentication, you can set up SSH keys:

1. Generate SSH key:
```cmd
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

2. Add SSH key to GitHub account:
   - Go to GitHub → Settings → SSH and GPG keys
   - Click "New SSH key"
   - Copy your public key from `C:\Users\lalaina\.ssh\id_rsa.pub`
   - Paste and save

3. Change remote URL to use SSH:
```cmd
git remote set-url origin git@github.com:YOUR_USERNAME/ranto-development.git
```

## Next Steps

After successfully pushing to GitHub:

1. **Update repository description** on GitHub with project details
2. **Add topics/tags** to your repository for better discoverability
3. **Set up branch protection rules** if working with a team
4. **Configure GitHub Pages** if you want to host documentation
5. **Set up GitHub Actions** for CI/CD (continuous integration/deployment)

## Collaboration

To collaborate with others:

1. Go to your repository on GitHub
2. Click "Settings" → "Manage access"
3. Click "Invite a collaborator"
4. Enter their GitHub username or email

Your repository is now live at: `https://github.com/YOUR_USERNAME/ranto-development`

## Summary

You have successfully:
- ✅ Renamed the project from Miharina to Ranto
- ✅ Created a GitHub repository
- ✅ Pushed your code to GitHub
- ✅ Set up version control for your project

Your Ranto business networking platform is now version-controlled and backed up on GitHub!