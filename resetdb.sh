#!/usr/bin/env bash
psql -U postgres -c "DROP DATABASE IF EXISTS puzzlebounty"
psql -U postgres -c "CREATE DATABASE puzzlebounty"
psql -U postgres -d puzzlebounty -c "ALTER DEFAULT PRIVILEGES GRANT ALL ON TABLES TO puzzleuser"