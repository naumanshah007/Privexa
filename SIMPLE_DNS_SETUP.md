# Simple DNS Setup Guide for Resend

## The Problem
Resend says you can send to `info@privexa.co`, but you need to verify your domain first by adding DNS records.

## What You Need to Do (Step by Step)

### Step 1: Find Where You Manage Your Domain

**Question:** Where did you buy or register `privexa.co`?

Common places:
- **Bluehost** (if you use Bluehost for hosting/email)
- **Namecheap**
- **GoDaddy**
- **Cloudflare**
- **Google Domains**
- **Your hosting provider**

### Step 2: Access DNS Settings

Once you know where your domain is managed:

1. Log in to that service
2. Look for:
   - "DNS Management"
   - "DNS Settings"
   - "Domain Settings"
   - "DNS Records"
   - "Manage DNS"

### Step 3: Add the 3 DNS Records from Resend

Go back to Resend (the page you showed me) and copy these 3 records:

**Record 1 - Domain Verification:**
- Type: `TXT`
- Name: `resend._domainkey`
- Value: (copy the full long string from Resend)
- TTL: `3600` or `Auto`

**Record 2 - Enable Sending:**
- Type: `MX`
- Name: `send`
- Value: (copy from Resend - starts with `feedback-smtp.ap-north...`)
- Priority: `10`
- TTL: `3600` or `Auto`

**Record 3 - Enable Sending:**
- Type: `TXT`
- Name: `send`
- Value: (copy from Resend - starts with `v=spf1 include:amazons...`)
- TTL: `3600` or `Auto`

### Step 4: Add Each Record

In your DNS management page:
1. Click "Add Record" or "+"
2. Select the Type (TXT or MX)
3. Enter the Name
4. Paste the Value/Content
5. Set Priority (only for MX record - use 10)
6. Set TTL to 3600 or Auto
7. Save

Repeat for all 3 records.

### Step 5: Wait and Check

1. Wait 5-30 minutes (DNS can take time)
2. Go back to Resend dashboard
3. Refresh the page
4. Check if status changed from "Pending" to "Verified"

## Need Help Finding Your DNS?

Tell me:
- Where did you buy `privexa.co`?
- Or where do you manage your website/hosting?

I can give you specific instructions for that provider!

## After Domain is Verified

Once verified, I'll update the code to use `noreply@privexa.co` as the sender, and emails will work perfectly!

