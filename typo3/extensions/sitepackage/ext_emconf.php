<?php

/*
 * This file is part of the jwied/sitepackage.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

/*
 * Extension Manager/Repository config file for ext "sitepackage".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'jwied* Sitepackage',
    'description' => 'Sitepackage from jwied*',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '11.5.0-11.5.99',
            'rte_ckeditor' => '11.5.0-11.5.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'JWIED\\Sitepackage\\' => 'Classes'
        ],
    ],
    'state' => 'stable',
    'clearCacheOnLoad' => true,
    'author' => 'jwied* GmbH & Co. KG',
    'author_email' => 'hallo@jwied.de',
    'author_company' => 'jwied*',
    'version' => '2.0.0',
];
