#!/bin/bash

# Script to push to GitHub repository
# First, create the repository on GitHub.com at https://github.com/new
# Name it: wholesale-websites
# Then run this script

echo "Setting up GitHub repository..."
echo ""
echo "If you haven't created the repository yet, please:"
echo "1. Go to https://github.com/new"
echo "2. Create a repository named 'wholesale-websites'"
echo "3. Make it PUBLIC"
echo "4. DO NOT initialize with README"
echo "5. Then press Enter to continue..."
read

# Get GitHub username
echo "Enter your GitHub username:"
read GITHUB_USERNAME

# Set remote and push
git remote add origin https://github.com/${GITHUB_USERNAME}/wholesale-websites.git 2>/dev/null || git remote set-url origin https://github.com/${GITHUB_USERNAME}/wholesale-websites.git
git branch -M main
git push -u origin main

echo ""
echo "✅ Repository pushed successfully!"
echo "🔗 Your repository link: https://github.com/${GITHUB_USERNAME}/wholesale-websites"

