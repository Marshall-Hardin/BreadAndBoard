package com.breadandboard.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

/**
 * 
 * @author Zev
 *
 */

@Entity
@Table(name = "DBusers")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_generator" )
	@SequenceGenerator(name="user_generator", sequenceName = "account_id_seq", allocationSize=1)
	@Column(name = "account_Id")
	private int accountId;
	
	@Column(name = "account_username", nullable = false, unique = true)
	private String username;
	
	@Column(name = "account_password")
	private String password;
	
	@Column(name = "account_name")
	private String name;
	
	@Column(name = "access_level")
	@Min(0)
	@Max(3)
	private int accessLevel;
	
	@Column(name = "ban_desc")
	private String banDesc;
	
	public User() {}

	public User(String username, String password, String name, @Min(1) @Max(3) int accessLevel, String banDesc) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
		this.accessLevel = accessLevel;
		this.banDesc = banDesc;
	}
	
	public User(String username, String password, String name, @Min(1) @Max(3) int accessLevel) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
		this.accessLevel = accessLevel;
	}



	public User(Integer accountId, String username, String password, String name,
			@Min(1) @Max(3) int accessLevel, String banDesc) {
		super();
		this.accountId = accountId;
		this.username = username;
		this.password = password;
		this.name = name;
		this.accessLevel = accessLevel;
		this.banDesc = banDesc;
	}

	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public String getAccountUsername() {
		return username;
	}

	public void setAccountUsername(String username) {
		this.username = username;
	}

	public String getAccountPassword() {
		return password;
	}

	public void setAccountPassword(String password) {
		this.password = password;
	}

	public String getAccountName() {
		return name;
	}

	public void setAccountName(String name) {
		this.name = name;
	}

	public int getAccessLevel() {
		return accessLevel;
	}

	public void setAccessLevel(int accessLevel) {
		this.accessLevel = accessLevel;
	}

	public String getBanDesc() {
		return banDesc;
	}

	public void setBanDesc(String banDesc) {
		this.banDesc = banDesc;
	}

	@Override
	public String toString() {
		return "User [accountId=" + accountId + ", username=" + username + ", password=" + password + ", name=" + name
				+ ", accessLevel=" + accessLevel + ", banDesc=" + banDesc + "]";
	}
}
