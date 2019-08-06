/**
 * @Paul Hudspeth
 */

package com.breadandboard;

import java.util.Properties;

import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate4.HibernateTransactionManager;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;

public class ORMConfig 
{

	private static final String url = "jdbc:oracle:thin:"//static for initilizing this.
			+ "@breadandboard.cn3lqnky3avv.us-east-1.rds.amazonaws.com" + //this is the endpoint for your database specifically.
			":1521:ORCL";
	private static final String username = "bandbProject2";
	private static final String password = "breadandboard";

	@Bean
	public DriverManagerDataSource datasource() 
	{
		DriverManagerDataSource datasource = new DriverManagerDataSource(url, username, password);
		datasource.setDriverClassName("oracle.jdbc.OracleDriver");
		return datasource;
	}
	
	@Bean
	public LocalSessionFactoryBean sessionFactory(DriverManagerDataSource dataSource) 
	{
		LocalSessionFactoryBean sf = new LocalSessionFactoryBean();
		sf.setDataSource(dataSource);
		//tell our session factory where our beans are
		sf.setPackagesToScan("com.breadandboard.beans"); //scans for @Entity
		
		Properties hibernateProperties = new Properties();
		hibernateProperties.put("hibernate.dialect", "org.hibernate.dialect.Oracle10gDialect");
		hibernateProperties.put("hibernate.show_sql", true);
		sf.setHibernateProperties(hibernateProperties);
		return sf;
	}
	
	@Bean
	public HibernateTransactionManager transactionManager(SessionFactory sessionFactory) 
	{
		HibernateTransactionManager txMgr = new HibernateTransactionManager();
		txMgr.setSessionFactory(sessionFactory);
		return txMgr;
	}
	
}
