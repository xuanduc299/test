import React, { Component } from 'react'
import './css/Footer.scss'
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul class="footer-links">
                                <li><Link>C</Link></li>
                                <li><Link href="http://scanfcode.com/category/front-end-development/">UI Design</Link></li>
                                <li><Link href="http://scanfcode.com/category/back-end-development/">PHP</Link></li>
                                <li><Link href="http://scanfcode.com/category/java-programming-language/">Java</Link></li>
                                <li><Link href="http://scanfcode.com/category/android/">Android</Link></li>
                                <li><Link href="http://scanfcode.com/category/templates/">Templates</Link></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li><Link href="http://scanfcode.com/about/">About Us</Link></li>
                                <li><Link href="http://scanfcode.com/contact/">Contact Us</Link></li>
                                <li><Link href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</Link></li>
                                <li><Link href="http://scanfcode.com/privacy-policy/">Privacy Policy</Link></li>
                                <li><Link href="http://scanfcode.com/sitemap/">Sitemap</Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="container">
                    <div class="rows">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                <Link href="#">Scanfcode</Link>.
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><Link class="facebook"><MdFacebook /></Link></li>
                                <li><Link class="twitter" ><AiFillInstagram /></Link></li>
                                <li><Link class="dribbble" ><AiFillTwitterCircle /></Link></li>
                                <li><Link class="linkedin" ><SiZalo /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer